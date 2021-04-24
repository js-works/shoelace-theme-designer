// external imports
import { createRef, useCallback, useEffect, useState, ReactNode } from 'react'
import Color from 'color'
import { BsCheckCircle, BsGift, BsHeart } from 'react-icons/bs'
import { observer } from 'mobx-react-lite'

// internal imports
import { AppLayout } from '../../layout/app-layout/app-layout'
import { HLayout } from '../../layout/h-layout/h-layout'
import { VLayout } from '../../layout/v-layout/v-layout'
import { useStore } from '../../../store/store-hooks'
import { H4 } from '../../typography/h4/h4'
import { Text } from '../../typography/text/text'

import {
  getColor,
  getContrast,
  loadTheme,
  SEMANTIC_COLORS,
  COLOR_SHADES
} from '../../../theming/theme-utils'

import {
  getAllBaseThemeIds,
  getBaseThemeNameById
} from '../../../theming/base-themes'

import {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  ColorPicker,
  Dialog,
  Drawer,
  Dropdown,
  Icon,
  Input,
  Menu,
  MenuDivider,
  MenuItem,
  Radio,
  Range,
  Rating,
  Select,
  Spinner,
  Switch,
  Tab,
  TabGroup,
  TabPanel,
  Tooltip
} from '../../shoelace/shoelace'

// styles
import './designer.css'
import { Showcases } from '../../showroom/showcases/showcases'

// === export ========================================================

export { Designer }

// === components ====================================================

type DesignerProps = {
  slotShowcases?: ReactNode
}

const Designer = observer(({ slotShowcases }: DesignerProps) => {
  const store = useStore()

  useEffect(() => {
    loadTheme('default', store.customizedTheme)
  }, [store.customizedTheme])

  return (
    <div>
      <ThemeExportDrawer />
      <AppLayout
        className="designer"
        slotHeader={<Header />}
        slotSidebar={<Sidebar />}
        slotMain={
          <Main>
            <Showcases />
          </Main>
        }
      />
    </div>
  )
})

const Header = observer(() => {
  const store = useStore()

  const onShareClick = useCallback(() => {
    store.copyToClipboard()
    store.setShareThemeMessageVisible(true)

    setTimeout(() => {
      store.setShareThemeMessageVisible(false)
    }, 2000)
  }, [])

  const onExportClick = useCallback(() => {
    if (!store.exportDrawerVisible) {
      store.setExportDrawerVisible(true)
    }
  }, [])

  const isDark = Color(store.customizing.colorBack).isDark()
  const cssClass = isDark ? 'designer__header' : 'designer__header--with-shadow'

  return (
    <div className={cssClass}>
      <div className="designer__brand">Shoelace Theme Designer</div>
      <HLayout gap="small">
        <Button type="default" onclick={onShareClick}>
          Share theme
        </Button>
        <Button type="default" onclick={onExportClick}>
          Export theme
        </Button>
      </HLayout>
    </div>
  )
})

function Sidebar() {
  const store = useStore()
  const invertTheme = useCallback(() => store.invertTheme(), [])
  const resetTheme = useCallback(() => store.resetTheme(), [])

  const onBaseThemeChange = (ev: any) => {
    const selectedBaseThemeId = ev.target.value

    if (store.baseThemeId === selectedBaseThemeId) {
      return
    }

    store.setBaseThemeId(selectedBaseThemeId)
    store.resetTheme()
  }

  const customizing = store.customizing

  return (
    <VLayout className="designer__sidebar">
      <HLayout gap="small">
        <Text>Base theme:</Text>
        <Select
          className="designer__base-theme-selector"
          onsl-change={onBaseThemeChange}
          value={store.baseThemeId}
        >
          {getAllBaseThemeIds().map((id) => (
            <MenuItem key={id} value={id}>
              {getBaseThemeNameById(id)}
            </MenuItem>
          ))}
        </Select>
      </HLayout>
      <div className="designer__has-modified-badge">
        {store.themeModified ? (
          <Badge type="warning">modified</Badge>
        ) : (
          <Badge type="info">original</Badge>
        )}
      </div>
      <TabGroup className="designer__sidebar-tabs">
        <Tab slot="nav" panel="colors">
          Colors
        </Tab>
        <Tab slot="nav" panel="text">
          Text
        </Tab>
        <Tab slot="nav" panel="overrides">
          Overrides
        </Tab>
        <TabPanel name="colors">
          <ColorControl
            colorName="primary"
            label="Primary color"
            value={customizing.colorPrimary}
          />
          <ColorControl
            colorName="success"
            label="Success color"
            value={customizing.colorSuccess}
          />
          <ColorControl
            colorName="info"
            label="Info color"
            value={customizing.colorInfo}
          />
          <ColorControl
            colorName="warning"
            label="Warning color"
            value={customizing.colorWarning}
          />
          <ColorControl
            colorName="danger"
            label="Danger color"
            value={customizing.colorDanger}
          />
          <ColorControl
            colorName="gray"
            label="Neutral color"
            value={customizing.colorGray}
          />
          <ColorControl
            colorName="front"
            label="Front color"
            value={customizing.colorFront}
          />
          <ColorControl
            colorName="back"
            label="Back color"
            value={customizing.colorBack}
          />
        </TabPanel>
        <TabPanel name="text">
          <VLayout gap="small">
            <Text size="small">
              Please select whether the default text colors shall be used or
              whether front or back color shall be enforced instead.
            </Text>
            <br />
            <TextColorControl
              colorName="primary"
              label="Primary text"
              value={customizing.textPrimary}
            />
            <TextColorControl
              colorName="success"
              label="Success text"
              value={customizing.textSuccess}
            />
            <TextColorControl
              colorName="info"
              label="Info text"
              value={customizing.textInfo}
            />
            <TextColorControl
              colorName="warning"
              label="Warning text"
              value={customizing.textWarning}
            />
            <TextColorControl
              colorName="danger"
              label="Danger text"
              value={customizing.textDanger}
            />
          </VLayout>
        </TabPanel>
        <TabPanel name="overrides">
          <TokenOverrides />
        </TabPanel>
      </TabGroup>
      <HLayout className="designer__sidebar-color-actions" gap="small">
        <Button onclick={invertTheme}>Invert theme</Button>
        <Button onclick={resetTheme} disabled={!store.themeModified}>
          Reset theme
        </Button>
      </HLayout>
    </VLayout>
  )
}

type ColorControlProps = {
  label: string
  value: string

  colorName:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'gray'
    | 'front'
    | 'back'
}

const ColorControl = observer((props: ColorControlProps) => {
  const { colorName, label, value } = props
  const store = useStore()

  const onChange = useCallback(
    (ev: any) => {
      if (colorName) {
        const propName =
          'color' + colorName[0].toUpperCase() + colorName.substr(1)

        store.customize({ [propName]: ev.target.value })
      }
    },
    [colorName]
  )

  return (
    <HLayout className="designer__color-control">
      <label className="designer__color-control-label">{label}:</label>
      <span className="designer__color-control-hex-value">
        {value?.toUpperCase()}
      </span>
      <ColorPicker
        format="hex"
        noFormatToggle={true}
        size="small"
        value={value}
        hoist
        onsl-change={onChange}
      ></ColorPicker>
    </HLayout>
  )
})

type TextColorControlProps = {
  colorName: string
  label: string
  value: 'default' | 'back' | 'front'
}

const TextColorControl = observer((props: TextColorControlProps) => {
  const { colorName, label, value } = props
  const store = useStore()

  const onChange = useCallback(
    (ev: any) => {
      if (colorName) {
        const propName =
          'text' + colorName[0].toUpperCase() + colorName.substr(1)

        store.customize({ [propName]: ev.target.value })
      }
    },
    [colorName]
  )

  return (
    <HLayout>
      <label className="designer__text-color-control-label">{label}:</label>
      <Select
        value={value}
        size="small"
        onsl-change={onChange}
        className="designer__text-color-control-select"
      >
        <MenuItem value="default">default</MenuItem>
        <MenuItem value="back">back color</MenuItem>
        <MenuItem value="front">front color</MenuItem>
      </Select>
    </HLayout>
  )
})

function TokenOverrides() {
  const store = useStore()

  const [state, setState] = useState({
    filterText: ''
  })

  const onFilterTextInput = (ev: any) => {
    const value = ev.currentTarget.value.trim()

    setState({ filterText: value })
  }

  return (
    <div>
      <Input
        className="designer__token-overrides-filter-field"
        placeholder="Filter..."
        size="small"
        onsl-input={onFilterTextInput}
        clearable
        pill
      />
      <div className="designer__token-overrides-scroll-pane">
        {Object.keys(store.baseTheme)
          .filter(
            (tokenName) =>
              state.filterText === '' || tokenName.includes(state.filterText)
          )
          .map((tokenName) => {
            return <TokenControl key={tokenName} name={tokenName} />
          })}
      </div>
    </div>
  )
}

type TokenControlProps = {
  name: string
}

function TokenControl({ name }: TokenControlProps) {
  const store = useStore()

  const onTokenChange = (ev: any) => {
    const value = ev.currentTarget.value.trim()
    ev.currentTarget.value = value

    const overrides = store.customizing.overrides
    const oldValue = (overrides as any)[name]

    if (value === '' && oldValue !== undefined) {
      const newOverrides = { ...overrides }

      delete (newOverrides as any)[name]
      store.customize({ overrides: newOverrides })
    } else if (value !== oldValue) {
      const newOverrides = { ...overrides, [name]: value }
      store.customize({ overrides: newOverrides })
    }
  }

  const baseTheme = store.baseTheme
  const baseValue = (baseTheme as any)[name]
  const storeValue = (store.customizing.overrides as any)[name]

  return (
    <div className="designer__token-control">
      <label
        className={
          'designer__token-control-label' + (storeValue ? '--bold' : '')
        }
      >
        {name}
      </label>
      <Tooltip
        className="designer__token-control-tooltip"
        content={`Base theme value: ${baseValue}`}
      >
        <Input
          className="designer__token-control-input"
          size="small"
          value={storeValue || ''}
          placeholder={baseValue}
          onsl-change={onTokenChange}
        ></Input>
      </Tooltip>
    </div>
  )
}

type MainProps = {
  children: ReactNode
}

const Main = observer(({ children }: MainProps) => {
  const store = useStore()

  return (
    <div className="designer__main">
      <Alert
        className="designer__copied-url-alert"
        type="success"
        open={store.shareThemeMessageVisible}
      >
        <span slot="icon">
          <BsCheckCircle />
        </span>
        URL has been copied to clipboard
      </Alert>
      <Overview />
      <div className="designer__showcases">{children}</div>
    </div>
  )
})

const ThemeExportDrawer = observer(() => {
  const store = useStore()

  const closeDrawer = () => {
    store.setExportDrawerVisible(false)
  }

  return (
    <Drawer
      id="drawer"
      label="Export theme"
      className="designer__drawer"
      open={store.exportDrawerVisible}
      onsl-hide={closeDrawer}
    >
      <TabGroup>
        <Tab slot="nav" panel="css">
          CSS properties
        </Tab>
        <Tab slot="nav" panel="json">
          JSON
        </Tab>
        <TabPanel name="css">
          <textarea
            className="designer__drawer-textarea"
            readOnly
            value={store.customizedCss}
          />
        </TabPanel>
        <TabPanel name="json">
          <textarea
            className="designer__drawer-textarea"
            readOnly
            value={store.customizedJson}
          />
        </TabPanel>
      </TabGroup>
      <Button slot="footer" type="primary" onclick={closeDrawer}>
        Close
      </Button>
    </Drawer>
  )
})

const Overview = observer(() => {
  const dialogRef = createRef<any>()

  return (
    <HLayout gap="huge" align="top" wrap={true}>
      <div className="designer__overview-palette">
        <H4>Palette</H4>
        <table
          className="designer__overview-palette-table"
          cellPadding={0}
          cellSpacing={0}
        >
          <thead>
            <tr>
              <td />
              {SEMANTIC_COLORS.map((color) => (
                <th key={color}>{color === 'gray' ? 'neutral' : color}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COLOR_SHADES.map((shade) => (
              <tr key={shade}>
                <td>{shade}</td>
                {SEMANTIC_COLORS.map((color) => {
                  const style = {
                    backgroundColor: `var(--sl-color-${color}-${shade})`
                  }

                  return <td key={color} style={style}></td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <VLayout>
          <H4>Contrast</H4>
          <HLayout>
            <ContrastInfo colorName="default" />
            <ContrastInfo colorName="primary" />
            <ContrastInfo colorName="success" />
          </HLayout>
          <HLayout>
            <ContrastInfo colorName="info" />
            <ContrastInfo colorName="warning" />
            <ContrastInfo colorName="danger" />
          </HLayout>
        </VLayout>
      </div>
      <div>
        <H4>Assorted components</H4>
        <VLayout gap="medium">
          <HLayout>
            <Button size="small">Default</Button>
            <Button type="primary" size="small">
              Primary
            </Button>
            <Button type="success" size="small">
              Success
            </Button>
            <Button type="info" size="small">
              Info
            </Button>
            <Button type="warning" size="small">
              Warning
            </Button>
            <Button type="danger" size="small">
              Danger
            </Button>
          </HLayout>
          <HLayout gap="medium">
            <Dropdown>
              <Button slot="trigger" caret>
                Dropdown
              </Button>
              <Menu>
                <MenuItem>Dropdown Item 1</MenuItem>
                <MenuItem>Dropdown Item 2</MenuItem>
                <MenuItem>Dropdown Item 3</MenuItem>
                <MenuDivider></MenuDivider>
                <MenuItem checked>Checked</MenuItem>
                <MenuItem disabled>Disabled</MenuItem>
                <MenuDivider></MenuDivider>
                <MenuItem>
                  Prefix
                  <span slot="prefix">
                    <BsGift />
                  </span>
                </MenuItem>
                <MenuItem>
                  Suffix Icon
                  <span slot="suffix">
                    <BsHeart />
                  </span>
                </MenuItem>
              </Menu>
            </Dropdown>
            <Range min="0" max="100" step="1"></Range>
          </HLayout>
          <HLayout gap="medium" align="bottom">
            <Input label="Some input" placeholder="Enter text here..."></Input>
            <ButtonGroup label="Some button group">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </HLayout>
          <HLayout gap="medium">
            <Switch>Enable some feature</Switch>
            <Button onclick={(ev: any) => dialogRef.current!.show()}>
              Press to open dialog
            </Button>
            <Dialog ref={dialogRef} label="Dialog" className="dialog-overview">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <Button
                slot="footer"
                type="primary"
                onclick={() => dialogRef.current!.hide()}
              >
                Close
              </Button>
            </Dialog>
          </HLayout>
          <TabGroup>
            <Tab slot="nav" panel="checkbox-radio">
              Checkbox/Radio
            </Tab>
            <Tab slot="nav" panel="rating">
              Rating
            </Tab>
            <Tab slot="nav" panel="spinner">
              Spinner
            </Tab>
            <Tab slot="nav" panel="buttons">
              Buttons
            </Tab>
            <TabPanel name="checkbox-radio">
              <HLayout gap="huge">
                <VLayout>
                  <Checkbox checked>Some checkbox</Checkbox>
                  <Checkbox>Another checkbox</Checkbox>
                </VLayout>
                <VLayout>
                  <Radio name="option">Option 1</Radio>
                  <Radio name="option" checked>
                    Option 2
                  </Radio>
                </VLayout>
              </HLayout>
            </TabPanel>
            <TabPanel name="rating">
              <Rating precision=".5" value="2.5"></Rating>
            </TabPanel>
            <TabPanel name="spinner">
              <Spinner></Spinner>
              <Spinner style={{ fontSize: '2rem' }}></Spinner>
              <Spinner style={{ fontSize: '3rem' }}></Spinner>
            </TabPanel>
            <TabPanel name="buttons">
              <HLayout>
                <Button type="primary">Primary</Button>
                <Button type="success">Success</Button>
                <Button type="info">Info</Button>
                <Button type="warning">Warning</Button>
                <Button type="danger">Danger</Button>
              </HLayout>
            </TabPanel>
          </TabGroup>
        </VLayout>
      </div>
    </HLayout>
  )
})

type ContrastInfoProps = {
  colorName: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

const ContrastInfo = observer(({ colorName }: ContrastInfoProps) => {
  const store = useStore()

  let colorTxt: Color
  let colorBg: Color

  if (colorName === 'default') {
    colorTxt = getColor('color-black', store.customizedTheme)
    colorBg = getColor('color-white', store.customizedTheme)
  } else {
    colorBg = getColor(`color-${colorName}-500`, store.customizedTheme)
    colorTxt = getColor(`color-${colorName}-text`, store.customizedTheme)
  }

  const contrast = getContrast(Color(colorTxt), Color(colorBg))
  const contrastString = contrast.toFixed(2)

  const badgeClass =
    colorName === 'default' ? 'designer__contrast-info-default-badge' : ''

  const badgeTextClass =
    colorName === 'default'
      ? 'designer__contrast-info-default-badge-text'
      : 'designer__contrast-info-badge-text'

  let result: string

  if (contrast >= 7) {
    result = 'level AAA'
  } else if (contrast >= 4.5) {
    result = 'level AA'
  } else {
    result = 'poor'
  }

  return (
    <div>
      <Badge type={colorName} className={badgeClass}>
        <div className={badgeTextClass}>
          {colorName}: {contrastString} ({result})
        </div>
      </Badge>
    </div>
  )
})

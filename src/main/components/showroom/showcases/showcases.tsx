import { ReactNode } from 'react'
import { HLayout } from '../../layout/h-layout/h-layout'
import { VLayout } from '../../layout/v-layout/v-layout'
import * as Shoelace from '@shoelace-style/shoelace'
import { Text } from '../../typography/text/text'
import { H4 } from '../../typography/h4/h4'
import { Alert, Avatar, Badge, Button, Icon } from '../../shoelace/shoelace'
import './showcases.css'

// === exports =======================================================

export { Showcases }

// === load all shoelace components ==================================

void [Shoelace]

// === Showcases =====================================================

type ShowcaseProps = {
  headline: string
  className?: string
  children?: ReactNode
}

function Showcase({ headline, className, children }: ShowcaseProps) {
  const cssClass = 'showcase' + (className ? ` ${className}` : '')

  return (
    <div className={cssClass}>
      <H4>{headline}</H4>
      {children}
    </div>
  )
}

function Showcases() {
  return (
    <div>
      <AlertShowcase />
      <AvatarShowcase />
      <BadgeShowcase />
      <ButtonShowcase />
      <IconShowcase />
    </div>
  )
}

// === showcases =====================================================

function AlertShowcase() {
  return (
    <Showcase headline="Alert">
      <Alert type="primary" open>
        <Icon slot="icon" name="info-circle"></Icon>
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </Alert>
      <br />
      <Alert type="success" open>
        <Icon slot="icon" name="check2-circle"></Icon>
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </Alert>
      <br />
      <Alert type="info" open>
        <Icon slot="icon" name="gear"></Icon>
        <strong>Your settings have been updated</strong>
        <br />
        Some settings will take affect the next time you log in.
      </Alert>
      <br />
      <Alert type="warning" open>
        <Icon slot="icon" name="exclamation-triangle"></Icon>
        <strong>This will end your session</strong>
        <br />
        You will be logged out until you log in again.
      </Alert>
      <br />
      <Alert type="danger" open>
        <Icon slot="icon" name="exclamation-octagon"></Icon>
        <strong>Delete this file?</strong>
        <br />
        This is permanent, which means forever!
      </Alert>
    </Showcase>
  )
}

function AvatarShowcase() {
  return (
    <Showcase headline="Avatar">
      <HLayout>
        <Avatar shape="square"></Avatar>
        <Avatar shape="rounded"></Avatar>
        <Avatar shape="circle"></Avatar>
      </HLayout>
    </Showcase>
  )
}

function BadgeShowcase() {
  return (
    <Showcase headline="Badge">
      <HLayout>
        <Badge type="primary">Primary</Badge>
        <Badge type="success">Success</Badge>
        <Badge type="info">Info</Badge>
        <Badge type="warning">Warning</Badge>
        <Badge type="danger">Danger</Badge>
      </HLayout>
    </Showcase>
  )
}

function ButtonShowcase() {
  return (
    <Showcase headline="Button">
      <HLayout>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </HLayout>
    </Showcase>
  )
}

function IconShowcase() {
  return (
    <Showcase headline="Icon" className="icon-showcase">
      <HLayout gap="medium" wrap={true}>
        <Icon name="exclamation-triangle"></Icon>
        <Icon name="archive"></Icon>
        <Icon name="battery-charging"></Icon>
        <Icon name="bell"></Icon>
        <Icon name="clock"></Icon>
        <Icon name="download"></Icon>
        <Icon name="file-earmark"></Icon>
        <Icon name="flag"></Icon>
        <Icon name="heart"></Icon>
        <Icon name="image"></Icon>
        <Icon name="lightning"></Icon>
        <Icon name="mic"></Icon>
        <Icon name="search"></Icon>
        <Icon name="star"></Icon>
        <Icon name="trash"></Icon>
        <Icon name="x-circle"></Icon>
      </HLayout>
    </Showcase>
  )
}

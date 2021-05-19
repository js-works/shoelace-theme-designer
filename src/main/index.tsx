import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library'
import { render } from 'react-dom'
import { App } from './components/app/app'
import { loadTheme } from './theming/theme-utils'
import { lightTheme } from './theming/light-theme'

import ArchiveSvg from 'bootstrap-icons/icons/archive.svg'
import BatteryChargingSvg from 'bootstrap-icons/icons/battery-charging.svg'
import BellSvg from 'bootstrap-icons/icons/bell.svg'
import Check2CircleSvg from 'bootstrap-icons/icons/check2-circle.svg'
import ClockSvg from 'bootstrap-icons/icons/clock.svg'
import DownloadSvg from 'bootstrap-icons/icons/download.svg'
import ExclamationTriangleSvg from 'bootstrap-icons/icons/exclamation-triangle.svg'
import ExclamationOctagonSvg from 'bootstrap-icons/icons/exclamation-octagon.svg'
import FileEarmarkSvg from 'bootstrap-icons/icons/file-earmark.svg'
import FlagSvg from 'bootstrap-icons/icons/flag.svg'
import GearSvg from 'bootstrap-icons/icons/gear.svg'
import HeartSvg from 'bootstrap-icons/icons/heart.svg'
import ImageSvg from 'bootstrap-icons/icons/image.svg'
import InfoCircleSvg from 'bootstrap-icons/icons/info-circle.svg'
import MicSvg from 'bootstrap-icons/icons/mic.svg'
import LightningSvg from 'bootstrap-icons/icons/lightning.svg'
import SearchSvg from 'bootstrap-icons/icons/search.svg'
import StarSvg from 'bootstrap-icons/icons/star.svg'
import TrashSvg from 'bootstrap-icons/icons/trash.svg'
import XCircleSvg from 'bootstrap-icons/icons/x-circle.svg'

loadTheme('default', lightTheme)

const icons: Record<string, string> = {
  archive: ArchiveSvg,
  'battery-charging': BatteryChargingSvg,
  bell: BellSvg,
  'check2-circle': Check2CircleSvg,
  clock: ClockSvg,
  download: DownloadSvg,
  'exclamation-triangle': ExclamationTriangleSvg,
  'exclamation-octagon': ExclamationOctagonSvg,
  'file-earmark': FileEarmarkSvg,
  flag: FlagSvg,
  gear: GearSvg,
  heart: HeartSvg,
  image: ImageSvg,
  'info-circle': InfoCircleSvg,
  lightning: LightningSvg,
  mic: MicSvg,
  search: SearchSvg,
  star: StarSvg,
  trash: TrashSvg,
  'x-circle': XCircleSvg
}

registerIconLibrary('default', {
  resolver: (name: string) => {
    const ret = icons[name]

    if (!ret) {
      throw new Error(
        `Icon "${name}" is not available in icon library "default"`
      )
    }

    return ret
  }
})

render(
  <div className="sl-theme-default">
    <App />
  </div>,
  document.getElementById('app')!
)

import { DefaultTFuncReturn } from 'i18next'
import { useTranslation } from 'react-i18next'
import { menuItems } from '../../data'

const MenuItem = ({
  url,
  label,
}: {
  url: string
  label: string | DefaultTFuncReturn
}) => (
  <li>
    <a className="hover:text-neutral-950 dark:hover:text-white" href={url}>
      {label}
    </a>
  </li>
)

const MenuItems = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'header.navMenu' })

  return (
    <ul className="md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap gap-5 items-center text-base justify-center">
      {menuItems.map((item) => (
        <MenuItem key={item} url={`#${item}`} label={t(`${item}.label`)} />
      ))}
    </ul>
  )
}

export default MenuItems

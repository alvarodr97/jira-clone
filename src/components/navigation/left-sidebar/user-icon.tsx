import { TooltipNavigation } from '../tooltip-navigation'
import { User } from 'lucide-react'

export const UserIcon = () => {
  return (
    <TooltipNavigation tooltipText="User X">
          <User className="custom-sidebar-button" />
      </TooltipNavigation>
  )
}

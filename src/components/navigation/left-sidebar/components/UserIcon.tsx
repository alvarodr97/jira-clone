import { TooltipNavigation } from '../../components/TooltipNavigation'
import { User } from 'lucide-react'

export const UserIcon = () => {
  return (
    <TooltipNavigation tooltipText="User X">
          <User className="custom-sidebar-button" />
      </TooltipNavigation>
  )
}

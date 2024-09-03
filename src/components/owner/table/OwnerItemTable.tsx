import { TableCell, TableRow } from '@/components/ui/table'
import { IOwner, OwnerType } from '@/interfaces/owner.interface'

interface Props {
    owner: IOwner
}

export const OwnerItemTable = ({ owner }: Props) => {

  const { name, type } = owner;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{OwnerType[type]}</TableCell>
    </TableRow>
  )
}

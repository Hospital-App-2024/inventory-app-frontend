import { TableCell, TableRow } from '@/components/ui/table'
import { IOwner, OwnerType } from '@/interfaces/owner.interface'
import { CreateOwnerModal } from '../modal/CreateOwnerModal';
import { BiSolidEdit } from 'react-icons/bi';

interface Props {
    owner: IOwner
}

export const OwnerItemTable = ({ owner }: Props) => {

  const { name, type, Product } = owner;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{OwnerType[type]}</TableCell>
      <TableCell>{ Product.length }</TableCell>
      <TableCell>
        <CreateOwnerModal
          title="Editar Propietario"
          owner={owner}
          icon={<BiSolidEdit size={20} />}
          variant="outline"
        />
      </TableCell>
    </TableRow>
  )
}

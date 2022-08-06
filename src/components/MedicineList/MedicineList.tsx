import Medicine from 'components/MedicineList/Medicine';
import medicineList from '__mocks__/MedicineList';

import { styled } from '@stitches/react';

const MedicineListItem = styled('ul', {
    display: 'flex',
    gap: '$2'
});

const MedicineList = () => {
    const medicineListItems = medicineList.map(medicine => (
        <Medicine key={ medicine.id } medicine={ medicine } />
    ));

    return (
        <MedicineListItem>
            { medicineListItems }
        </MedicineListItem>
    )
};

export default MedicineList;
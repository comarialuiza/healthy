import MedicineModel from "models/MedicineModel";
import { styled } from '@stitches/react';

interface MedicineProps {
    medicine: MedicineModel;
}

const MedicineItem = styled('li', {
    background: '$lilac300',
    fontSize: '$2',
    padding: '$4',
    borderRadius: '$3'
});

const Medicine = ({ medicine }: MedicineProps) => {
    const { id, name, format, dose, beginDate, endDate, duration, pillsLeft, frequency } = medicine;

    return (
        <MedicineItem>
            { name }
        </MedicineItem>
    );
};

export default Medicine;
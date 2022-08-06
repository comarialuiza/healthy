import MedicineModel, { MedicineFormat } from "models/MedicineModel";

const medicineList: MedicineModel[] = [
    {
        id: '1',
        name: 'Paracetamol',
        format: MedicineFormat.Capsule,
        dose: 1,
        beginDate: new Date('2020-09-18'),
        endDate: new Date('2022-09-20'),
        duration: 45,
        pillsLeft: 25,
        frequency: 'every day at 9h00'
    },
];

export default medicineList;
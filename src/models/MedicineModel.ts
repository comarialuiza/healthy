export enum MedicineFormat {
    Capsule = 'capsule',
    Syringe = 'syringe'
}

interface MedicineModel {
    id: string;
    name: string;
    format: MedicineFormat;
    dose: number;
    beginDate: Date;
    endDate: Date;
    duration: number;
    pillsLeft: number;
    frequency: string;
}

export default MedicineModel;

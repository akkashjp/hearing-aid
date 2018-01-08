export class Appconfig{
    
    path = '../../assets/jsonfiles/';
    ip = 'http://192.168.0.132:1874/';

    public readonly apiUrl = {
        Appointment:this.ip+'api/Appointment',
        Repairs:this.ip+'api/Repairs',
        Order:this.ip+'api/Order',
        Moulds:this.ip+'api/Moulds',
        AwaitingPos:this.ip+'api/AwaitingPos',
        AwaitingRepairs:this.ip+'api/AwaitingRepairs',
        Apporders:this.ip+'api/Apporders',
        CashflowCC:this.ip+'api/CashflowCC',
        CashflowCheques:this.ip+'api/CashflowCheques',
        CashflowsDaybook:this.ip+'api/CashflowsDaybook',
        CashflowsExpenses:this.ip+'api/CashflowsExpenses',
        CashflowMI:this.ip+'api/CashflowMI',
        CashflowReceived:this.ip+'api/CashflowReceived',
        SalesAllocated:this.ip+'api/SalesAllocated',
        SalesOverDues:this.ip+'api/SalesOverDues',
        SalesProcessing:this.ip+'api/SalesProcessing',
        SalesTrial:this.ip+'api/SalesTrial',
        SalesCreditSpares:this.ip+'api/SalesCreditSpares',
        StockInventory:this.ip+'api/StockInventory',
        Stockspares:this.ip+'api/Stockspares',
        StockSendToComp:this.ip+'api/Stockspares', // to be added
        StockTrial:this.ip+'api/StockTrial',
        StockTransferReq:this.ip+'api/StockTransferReq',
        Vendor:this.ip+'api/Vendor.json',    //to be added
        UserAppoinment:{
            UpdateAppoinment:this.ip+'AppointmentStatus.json',
            AwaitingRepair:this.ip+'Awaitingrepairapproval.json',
            AwaitingFitting:this.ip+'AwaitingFitting.json',
            UploadEnt:this.ip+'Entrefslip.json',
            CreatingFitting:this.ip+'FittingAppointment.json'

        }



    };
    public readonly apiUrlLocal = {
        Appointment:this.path+'Appointment.json',
        Repairs:this.path+'Repairs.json',
        Order:this.path+'Orders.json',
        Moulds:this.path+'Moulds(Awaiting).json',
        AwaitingPos:this.path+'Pos(Awaiting).json',
        AwaitingRepairs:this.path+'AwaitingRepairs.json',
        Apporders:this.path+'Apporders(Awaiting).json',
        CashflowCC:this.path+'CashflowCC.json',
        CashflowCheques:this.path+'CashflowCheques.json',
        CashflowsDaybook:this.path+'CashflowsDaybook.json',
        CashflowsExpenses:this.path+'CashflowsExpenses.json',
        CashflowMI:this.path+'CashflowMI.json',
        CashflowReceived:this.path+'CashflowReceived.json',
        SalesAllocated:this.path+'StockAllocated.json',
        SalesOverDues:this.path+'StockOverDues.json',
        SalesProcessing:this.path+'StockProcessing.json',
        SalesTrial:this.path+'Trial(sales).json',
        SalesCreditSpares:this.path+'SalesCreditSpares.json',
        StockInventory:this.path+'StockInventory.json',
        Stockspares:this.path+'Stockspares.json',
        StockSendToComp:this.path+'StockSendtoComp.json',    
        StockTrial:this.path+'StockTrial.json',
        StockTransferReq:this.path+'StockTransferReq.json',
        Vendor:this.path+'Vendor.json',
        UserAppoinment:{
            UpdateAppoinment:this.path+'AppointmentStatus.json',
            AwaitingRepair:this.path+'Awaitingrepairapproval.json',
            AwaitingFitting:this.path+'AwaitingFitting.json',
            UploadEnt:this.path+'Entrefslip.json',
            CreatingFitting:this.path+'FittingAppointment.json'

        },

        //post

        Audioligist:this.path+'Audiologist.json',
        customerEnt:this.path+'customerENT.json'

    };
}


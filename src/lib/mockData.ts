// Mock data for Vijay Travel TMS
export const contracts = [
  { srNo: 1, contractId: "VT-C-1001", party: "Tata Consultancy Services", startDate: "2024-04-01", endDate: "2025-03-31", vehicleName: "Innova Crysta", vehicleId: "VT-V-201", vehicleType: "SUV", kmDaily: 80, kmMonth: 2400, hoursDaily: 10, hoursMonthly: 300, package: "Monthly", gstIncluded: "Yes", gstType: "5%", rate: 65000, days: 26, extraMiles: 12, extraHours: 150, ratePerKm: 18, nightAllowance: 300, incentiveEme: 200, deductionUnused: 5, commonKey: "TCS-INV-201" },
  { srNo: 2, contractId: "VT-C-1002", party: "Infosys Ltd", startDate: "2024-06-15", endDate: "2025-06-14", vehicleName: "Toyota Etios", vehicleId: "VT-V-202", vehicleType: "Sedan", kmDaily: 60, kmMonth: 1800, hoursDaily: 9, hoursMonthly: 270, package: "Monthly", gstIncluded: "No", gstType: "12%", rate: 48000, days: 26, extraMiles: 10, extraHours: 120, ratePerKm: 15, nightAllowance: 250, incentiveEme: 150, deductionUnused: 4, commonKey: "INF-ETI-202" },
  { srNo: 3, contractId: "VT-C-1003", party: "Wipro Technologies", startDate: "2024-01-10", endDate: "2024-12-31", vehicleName: "Maruti Dzire", vehicleId: "VT-V-203", vehicleType: "Sedan", kmDaily: 70, kmMonth: 2100, hoursDaily: 10, hoursMonthly: 300, package: "Monthly", gstIncluded: "Yes", gstType: "5%", rate: 52000, days: 26, extraMiles: 11, extraHours: 130, ratePerKm: 16, nightAllowance: 300, incentiveEme: 180, deductionUnused: 5, commonKey: "WIP-DZ-203" },
  { srNo: 4, contractId: "VT-C-1004", party: "Accenture India", startDate: "2024-08-01", endDate: "2025-07-31", vehicleName: "Hyundai Aura", vehicleId: "VT-V-204", vehicleType: "Sedan", kmDaily: 75, kmMonth: 2250, hoursDaily: 10, hoursMonthly: 300, package: "Monthly", gstIncluded: "Yes", gstType: "5%", rate: 55000, days: 26, extraMiles: 12, extraHours: 140, ratePerKm: 17, nightAllowance: 300, incentiveEme: 200, deductionUnused: 5, commonKey: "ACC-AUR-204" },
  { srNo: 5, contractId: "VT-C-1005", party: "Capgemini", startDate: "2024-03-20", endDate: "2025-03-19", vehicleName: "Tempo Traveller", vehicleId: "VT-V-205", vehicleType: "Tempo", kmDaily: 100, kmMonth: 3000, hoursDaily: 12, hoursMonthly: 360, package: "Monthly", gstIncluded: "No", gstType: "12%", rate: 95000, days: 26, extraMiles: 18, extraHours: 200, ratePerKm: 25, nightAllowance: 500, incentiveEme: 300, deductionUnused: 8, commonKey: "CAP-TT-205" },
];

export const vehicles = [
  { srNo: 1, vehicleNo: "MH-12-AB-1234", name: "Innova Crysta", model: "2022", chassisNo: "MA3FAEB1S00123456", key: "K-201", type: "SUV", insurance: "ICICI Lombard", startDate: "2024-01-01", endDate: "2024-12-31", pucStart: "2024-06-01", pucEnd: "2025-05-31", fastagNo: "FT-9182736455", fastagBalance: 4250, status: "Active" },
  { srNo: 2, vehicleNo: "MH-12-CD-5678", name: "Toyota Etios", model: "2021", chassisNo: "MBJ29AB7M00345678", key: "K-202", type: "Sedan", insurance: "Bajaj Allianz", startDate: "2024-03-15", endDate: "2025-03-14", pucStart: "2024-04-10", pucEnd: "2025-04-09", fastagNo: "FT-2837465019", fastagBalance: 1820, status: "Active" },
  { srNo: 3, vehicleNo: "MH-12-EF-9012", name: "Maruti Dzire", model: "2023", chassisNo: "MA3ETDE1S00789012", key: "K-203", type: "Sedan", insurance: "HDFC Ergo", startDate: "2024-02-01", endDate: "2025-01-31", pucStart: "2024-08-01", pucEnd: "2025-07-31", fastagNo: "FT-5647382910", fastagBalance: 3180, status: "Maintenance" },
  { srNo: 4, vehicleNo: "MH-12-GH-3456", name: "Hyundai Aura", model: "2022", chassisNo: "MALA851BLNM345678", key: "K-204", type: "Sedan", insurance: "ICICI Lombard", startDate: "2024-05-10", endDate: "2025-05-09", pucStart: "2024-05-15", pucEnd: "2025-05-14", fastagNo: "FT-8273645190", fastagBalance: 2450, status: "Active" },
  { srNo: 5, vehicleNo: "MH-12-IJ-7890", name: "Tempo Traveller", model: "2020", chassisNo: "MAT4471009C12345", key: "K-205", type: "Tempo", insurance: "New India", startDate: "2024-04-01", endDate: "2025-03-31", pucStart: "2024-07-01", pucEnd: "2025-06-30", fastagNo: "FT-1029384756", fastagBalance: 5640, status: "Active" },
  { srNo: 6, vehicleNo: "MH-14-KL-2468", name: "Mahindra Marazzo", model: "2023", chassisNo: "MA1NA2MDLLN12345", key: "K-206", type: "SUV", insurance: "TATA AIG", startDate: "2024-06-01", endDate: "2025-05-31", pucStart: "2024-06-15", pucEnd: "2025-06-14", fastagNo: "FT-6574839201", fastagBalance: 980, status: "Idle" },
];

export const drivers = [
  { id: 1, name: "Ramesh Patil", license: "MH12 20210001234", contact: "+91 98765 43210", joinDate: "2022-03-15", salary: 28000, status: "Active", vehicle: "MH-12-AB-1234" },
  { id: 2, name: "Suresh Jadhav", license: "MH14 20180005678", contact: "+91 98762 11220", joinDate: "2021-07-20", salary: 26000, status: "Active", vehicle: "MH-12-CD-5678" },
  { id: 3, name: "Vikas Shinde", license: "MH12 20190009012", contact: "+91 99887 77665", joinDate: "2023-01-10", salary: 25000, status: "Active", vehicle: "MH-12-EF-9012" },
  { id: 4, name: "Anil Kamble", license: "MH09 20200003456", contact: "+91 90909 80808", joinDate: "2022-09-05", salary: 27000, status: "On Leave", vehicle: "MH-12-GH-3456" },
  { id: 5, name: "Mahesh Kulkarni", license: "MH12 20170007890", contact: "+91 91234 56789", joinDate: "2020-11-12", salary: 32000, status: "Active", vehicle: "MH-12-IJ-7890" },
];

export const logSheets = [
  { srNo: 1, vehicleNo: "MH-12-AB-1234", date: "2025-04-10", startKm: 45120, closeKm: 45198, totalKm: 78, startHrs: 9, closeHrs: 18, totalHrs: 9, extraMiles: 0, extraHrs: 0, driver: "Ramesh Patil", toll: 220, contractId: "VT-C-1001", commonKey: "TCS-INV-201" },
  { srNo: 2, vehicleNo: "MH-12-CD-5678", date: "2025-04-10", startKm: 32140, closeKm: 32205, totalKm: 65, startHrs: 9, closeHrs: 18, totalHrs: 9, extraMiles: 5, extraHrs: 0, driver: "Suresh Jadhav", toll: 180, contractId: "VT-C-1002", commonKey: "INF-ETI-202" },
  { srNo: 3, vehicleNo: "MH-12-EF-9012", date: "2025-04-10", startKm: 28910, closeKm: 28988, totalKm: 78, startHrs: 8, closeHrs: 19, totalHrs: 11, extraMiles: 8, extraHrs: 1, driver: "Vikas Shinde", toll: 320, contractId: "VT-C-1003", commonKey: "WIP-DZ-203" },
  { srNo: 4, vehicleNo: "MH-12-GH-3456", date: "2025-04-11", startKm: 18450, closeKm: 18523, totalKm: 73, startHrs: 9, closeHrs: 18, totalHrs: 9, extraMiles: 0, extraHrs: 0, driver: "Anil Kamble", toll: 200, contractId: "VT-C-1004", commonKey: "ACC-AUR-204" },
  { srNo: 5, vehicleNo: "MH-12-IJ-7890", date: "2025-04-11", startKm: 67200, closeKm: 67310, totalKm: 110, startHrs: 8, closeHrs: 20, totalHrs: 12, extraMiles: 10, extraHrs: 0, driver: "Mahesh Kulkarni", toll: 450, contractId: "VT-C-1005", commonKey: "CAP-TT-205" },
];

export const invoices = [
  { id: "INV-2025-0041", party: "Tata Consultancy Services", contract: "VT-C-1001", period: "Mar 2025", amount: 68250, gst: 3413, total: 71663, status: "Paid" },
  { id: "INV-2025-0042", party: "Infosys Ltd", contract: "VT-C-1002", period: "Mar 2025", amount: 50400, gst: 6048, total: 56448, status: "Pending" },
  { id: "INV-2025-0043", party: "Wipro Technologies", contract: "VT-C-1003", period: "Mar 2025", amount: 53600, gst: 2680, total: 56280, status: "Paid" },
  { id: "INV-2025-0044", party: "Accenture India", contract: "VT-C-1004", period: "Mar 2025", amount: 57200, gst: 2860, total: 60060, status: "Overdue" },
  { id: "INV-2025-0045", party: "Capgemini", contract: "VT-C-1005", period: "Mar 2025", amount: 99500, gst: 11940, total: 111440, status: "Pending" },
];

export const tollExpenses = [
  { id: 1, date: "2025-04-10", vehicle: "MH-12-AB-1234", driver: "Ramesh Patil", type: "Toll", location: "Mumbai-Pune Expressway", amount: 220, contractId: "VT-C-1001" },
  { id: 2, date: "2025-04-10", vehicle: "MH-12-CD-5678", driver: "Suresh Jadhav", type: "Parking", location: "BKC Mumbai", amount: 180, contractId: "VT-C-1002" },
  { id: 3, date: "2025-04-10", vehicle: "MH-12-EF-9012", driver: "Vikas Shinde", type: "Toll", location: "Mumbai-Nashik Highway", amount: 320, contractId: "VT-C-1003" },
  { id: 4, date: "2025-04-11", vehicle: "MH-12-GH-3456", driver: "Anil Kamble", type: "Parking", location: "Hinjewadi Pune", amount: 200, contractId: "VT-C-1004" },
  { id: 5, date: "2025-04-11", vehicle: "MH-12-IJ-7890", driver: "Mahesh Kulkarni", type: "Toll", location: "Mumbai-Goa Highway", amount: 450, contractId: "VT-C-1005" },
];

export const tripsChartData = [
  { month: "Oct", trips: 142, target: 130 },
  { month: "Nov", trips: 158, target: 150 },
  { month: "Dec", trips: 175, target: 160 },
  { month: "Jan", trips: 168, target: 165 },
  { month: "Feb", trips: 182, target: 170 },
  { month: "Mar", trips: 196, target: 180 },
  { month: "Apr", trips: 210, target: 190 },
];

export const revenueChartData = [
  { month: "Oct", revenue: 285000, expenses: 142000 },
  { month: "Nov", revenue: 312000, expenses: 158000 },
  { month: "Dec", revenue: 342000, expenses: 165000 },
  { month: "Jan", revenue: 328000, expenses: 162000 },
  { month: "Feb", revenue: 358000, expenses: 172000 },
  { month: "Mar", revenue: 385000, expenses: 180000 },
];

export const recentActivity = [
  { id: 1, action: "New contract created", target: "VT-C-1005 — Capgemini", time: "10 min ago", type: "contract" },
  { id: 2, action: "Log sheet uploaded", target: "MH-12-AB-1234 — Apr 10", time: "32 min ago", type: "logsheet" },
  { id: 3, action: "Invoice generated", target: "INV-2025-0045 — ₹1,11,440", time: "1 hr ago", type: "invoice" },
  { id: 4, action: "Driver added", target: "Mahesh Kulkarni", time: "3 hr ago", type: "driver" },
  { id: 5, action: "Vehicle PUC renewed", target: "MH-12-IJ-7890", time: "5 hr ago", type: "vehicle" },
];

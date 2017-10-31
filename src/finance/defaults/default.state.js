const defaultTransaction = {
    id: '',
    name: '',
    type: '',
    amount: 2000,
    currency: '$',
    createdOn: '',
    transactionDate: '',
    categoryId: ''
};

const defaultCategory ={
    id:'',
    name: '',
    type: ''
};

const defaultCategoryList = [
    {
        id:'1',
        name: 'Salary',
        type: 'Credit'
    },
    {
        id:'2',
        name: 'Groceries',
        type: 'Debit'
    },
    {
        id:'3',
        name: 'House Rent',
        type: 'Debit'
    },
    {
        id:'2',
        name: 'Interest',
        type: 'Credit'
    },
];


export const financeStore = {
    log:{
        transactionList:[
            {
                id: '1',
                name: 'Oct Salary',
                type: 'Credit',
                amount: 2000,
                currency: '$',
                createdOn: '',
                transactionDate: '',
                categoryId: '1'
            },
            {
                id: '2',
                name: 'Groceries',
                type: 'Debit',
                amount: 100,
                currency: '$',
                createdOn: '',
                transactionDate: '',
                categoryId: '2'
            },
            {
                id: '3',
                name: 'House Rent',
                type: 'Debit',
                amount: 1200,
                currency: '$',
                createdOn: '',
                transactionDate: '',
                categoryId: '3'
            }
        ]
    },
    account:{
        balance: 10000,
        currency: '$'

    }
};
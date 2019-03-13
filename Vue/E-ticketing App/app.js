console.log("script connected");

const app = new Vue({
    el: "#app",
    data: {
        firstName: '',
        lastName: '',
        email: '',
        ticketQuantity: 1,
        ticketType: 'general',
        referrals: [],
        specialRequests: '',
        purchaseAgreementSigned: false
    },
    methods: {
        resetFields: function () {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.ticketQuantity = 1;
            this.ticketType = 'general';
            this.referrals = [];
            this.specialRequests = '';
            this.purchaseAgreementSigned = false
        },
        submitForm: function () {

        }
    },
    computed: {
        fullname: {
            get: function () {
                if (this.firstName && this.lastName) {
                    return this.firstName + " " + this.lastName;
                } else {
                    return this.firstName || this.lastName;
                }
            },
            set: function (newFullname) {
                const names = newFullname.split(" ");
                if (names.length === 2) {
                    this.firstName = names[0];
                    this.lastName = names[1];
                }
                if (names.length <= 1) {
                    this.firstName = names[0] || " ";
                    this.lastName = " ";
                }
            }

        },
        ticketDescription: function () {
            let readableTicketType = 'General Admission';
            if (this.ticketType === 'vip') {
                readableTicketType = 'VIP';
            }
            let ticketPluralization = 'tickets';
            if (this.ticketQuantity === 1) {
                ticketPluralization = 'ticket';
            }

            return this.ticketQuantity + " " + readableTicketType + " " + ticketPluralization;
        },
        formIsValid: function () {
            return this.firstName && this.lastName && this.email && this.purchaseAgreementSigned;
        },
        submitButtonStyles: function () {
            return this.formIsValid ?
                { 'background-color ': 'pink', cursor: 'pointer' } : { 'background-color ': 'red', cursor: 'default' };
        },
        touchedEmailStyles: function () {
            return this.email ?
                {
                    'border-color': '#bdbcbc',
                    'border-width': '2px'
                } : {
                    'border-color': '#bdbcbc',
                    'border-width': '2px'
                };
        }

        // submitButtonColor : function () {
        //     return this.formIsValid ? '#4c7ef3' : 'gray';
        // },
        // submitButtonCursor : function () {
        //     return this.formIsValid ? 'pointer' : 'default';
        // }
    },
    watch: {
        specialRequests: function (oldValue, newValue) {
            if (newValue.toLowerCase().includes('meet and greet') ||
                newValue.toLowerCase().includes('meet-and-greet')) {
                this.ticketType = 'vip';
            }
        }
    },

});

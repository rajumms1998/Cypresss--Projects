


const AWB_Number_intransit="DUMPPQFMSPGI";


describe('Status Change APIs', function () {

   
    //api to mark an order as delivered on stage 
    it('deliveredAPI ', function () {

        const payload = {
            data: {
                awb: this.data.AWB_Number,
                scans: "",
                current_status: "delivered",
                latest_status: {
                    clickpost_status_code: 8,
                    timestamp: "2023-04-16T22:00:00.000Z"
                },
                clickpost_data: {
                    clickpost_status_code: 8
                },
                additional: {
                    ndr_status_code: "1",
                    ndr_status_description: "Customer Unavailable"
                }
            }
        }
        cy.request({
            method: 'POST',
            url: 'http://nushop-dashboard.kaip.in/api/update-order-state',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Server': 'nginx',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"'
               
            },
            body: payload
        }).then((response) => {        
            expect(response.status).to.equal(200); 
            cy.log(JSON.stringify(response.body));
        });
    })

    //api to mark an order as dispatched on stage 
    it.only('IntransitAPI',function(){
        const payloadtwo={
            Shipment: {
                Status: {
                    Status: "in transit",
                    StatusDateTime: "2023-11-22T18:58:42.767",
                    StatusType: "UD",
                    StatusLocation: "Gujarat",
                    Instructions: "Shipped"
                },
                PickUpDate: "",
                NSLCode: "XYZ",
                Sortcode: "IXC",
                ReferenceNo: "NCR1700646462703-2V",
                AWB: AWB_Number_intransit
            }
         }
         cy.request({
            method: 'POST',
            url: 'https://qp47t26sl7.execute-api.ap-south-1.amazonaws.com/uat/v1/nushop/delhivery-stage',
            headers: {
                'Content-Type': 'application/json',
                'Server': 'nginx',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"'
               
            },
            body:payloadtwo
        }).then((response)=>{
           // expect(response.status).to.equal(200); 
            cy.log(JSON.stringify(response.body));
            cy.log("AWB IS DISPATCHED")
        })

    })

    //api to mark an order as out for delivery on stage 
    it('OFD',function(){
const payloadThree={
    Shipment: {
        Status: {
            Status: "dispatched",
            StatusDateTime: "2023-12-11T19:01:42.767",
            StatusType: "UD",
            StatusLocation: "Gujarat",
            Instructions: "Out For Delivery"
        },
        PickUpDate: "",
        NSLCode: "X-DDD3FD",
        Sortcode: "IXC",
        ReferenceNo: "NS0FO1702283563015",
        AWB: this.data.AWB_Number
    }
 }
 cy.request({
    method: 'POST',
    url: 'https://qp47t26sl7.execute-api.ap-south-1.amazonaws.com/uat/v1/nushop/delhivery-stage',
    headers: {
        'Content-Type': 'application/json',
        'Server': 'nginx',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"'
       
    },
    body:payloadThree
}).then((response)=>{
    // expect(response.status).to.equal(200); 
     cy.log(JSON.stringify(response.body));
 })


    })

    //api to mark an order as Failed Delivery on stage 
    it('FailedDelivery',function(){
        const payloadFour={
            Shipment: {
                Status: {
                    Status: "pending",
                    StatusDateTime: "2023-11-22T19:01:42.767",
                    StatusType: "UD",
                    StatusLocation: "Gujarat",
                    Instructions: "Failed Delivery"
                },
                PickUpDate: "",
                NSLCode: "EOD-11",
                Sortcode: "IXC",
                ReferenceNo: "NCR1700646462703-2V",
                AWB: this.data.AWB_Number
            }
         }
         cy.request({
            method: 'POST',
            url: 'https://qp47t26sl7.execute-api.ap-south-1.amazonaws.com/uat/v1/nushop/delhivery-stage',
            headers: {
                'Content-Type': 'application/json',
                'Server': 'nginx',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"'    
            },
            body:payloadFour
        }).then((response)=>{
            // expect(response.status).to.equal(200); 
             cy.log(JSON.stringify(response.body));
         })


    })

    //api to mark an order as RTO initiated on stage 
    it('rtoInitiated',function(){
        const payloadfive={
            Shipment: {
                Status: {
                    Status: "dispatched",
                    StatusDateTime: "2023-11-22T19:01:42.767",
                    StatusType: "RT",
                    StatusLocation: "Gujarat",
                    Instructions: "RTO Initiated"
                },
                PickUpDate: "",
                NSLCode: "EOD-11",
                Sortcode: "IXC",
                ReferenceNo: "NCR1700646462703-2V",
                AWB: this.data.AWB_Number
            }
         }
         cy.request({
            method :"POST",
            url:"https://qp47t26sl7.execute-api.ap-south-1.amazonaws.com/uat/v1/nushop/delhivery-stage",
            headers :{
                'Content-Type': 'application/json',
                'Server': 'nginx',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
                'ETag': 'W/"20-tj8FR1AyEiO2Z6YPDa60CyElEJU"' 
            },
            body :payloadfive      
         }).then((response)=>{
            cy.log(JSON.stringify(response.body));
         })
    })


})
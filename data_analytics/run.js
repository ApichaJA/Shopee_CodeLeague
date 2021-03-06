const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const fs = require('fs');

const rawdata = fs.readFileSync('./contacts.json');
const dataParse = JSON.parse(rawdata);

const totalJson = dataParse.length

var submmition = dataParse
var finder = []
var fetch = []
var toCsv = []

	dataParse.forEach((data, index)=>{
		finder[index]=(submmition.filter((sub, indexSub) => sub.OrderId === data.OrderId && data.OrderId!="" || sub.Email === data.Email && data.Email!="" || sub.Phone === data.Phone && data.Phone!="" ? submmition.splice(indexSub, 1) : false))
				var fetchId = ""
				finder[index].map(fin => fetchId += '-'+fin.Id)
				fetch.Con = finder[index].map(fin => fin.Contacts)
				toCsv.push({
					'ticket_id': index,
					'ticket_trace/contact': `${fetchId.replace("-","")}, ${fetch.Con.reduce((valOne, valTwo)=> valOne+valTwo)}`
				})
				console.log(totalJson + '/' + submmition.length)
  })

const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: [
    {id: 'ticket_id', title: 'ticket_id'},
    {id: 'ticket_trace/contact', title: 'ticket_trace/contact'},
  ]
});

csvWriter
  .writeRecords(toCsv)
  .then(()=> console.log('The CSV file was written successfully'));
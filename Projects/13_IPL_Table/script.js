const url = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

async function fetchData() {

    try{
        const respose = await fetch(url);
        const data = await respose.json();
        const sortData = data.sort((a,b)=>{
           return a.NRR-b.NRR
        })
        let table = document.querySelector("tbody");
        for(let obj of sortData){
            let tr = document.createElement("tr");
            Object.keys(obj).forEach((ele)=>{
                let td = document.createElement("td");
                td.innerHTML = obj[ele];
                tr.append(td);
            })
            table.append(tr);
        }
    }catch(err){    
        console.log(err)
    }
}

fetchData();
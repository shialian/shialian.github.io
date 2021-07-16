var data;
var groups;
const titles = ["創意度、跨域思想表現",
                "工作能力與效率",
                "團隊參與表現",
                "領導能力",
                "容易相處與合作",
                "擅長哪些工作",
                "哪些能力要加強"
               ];
const description = ["說明",
                     "說明_1",
                     "說明_2",
                     "說明_3",
                     "說明_4",
                     "擅長那些工作?",
                		 "哪些能力要加強?"
                    ];
var searchName = null;
var table = d3.select("#response-table").append("table");
var headers = table.append("thead").append("tr")
const nameTitle = ""

function Click(event){
  searchName = document.getElementById("name").value;
}
function AddRow(row){
  var ret = [];
  description.forEach(function(item){
    ret.push(row[item]);
  })
  return ret;
}

function Draw(data){
  headers
  	.selectAll("th")
    .data(titles)
    .enter()
    .append("th")
    .text(function (d) { return d; })
  var rows = table
  	.append("tbody")
  	.selectAll("tr")
  	.data(data)
  	.enter()
  	.append("tr");
  var cells = rows
  	.selectAll("td")
  	.data(function(row){ return AddRow(row); })
  	.enter()
  	.append("td")
  	.text(function(d){ return d; })
}

d3.json("https://raw.githubusercontent.com/shialian/shialian.github.io/main/Project3.json", function(d){
  groups = d3.keys(d);
  var f = null;
  groups.forEach(function(group){
    if(f == null){
      f = d[group]
      	.filter(e => e["被評分的組員姓名"] == "謝唯安")
    }
  })
  Draw(f);
})
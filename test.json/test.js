var contact={
    "username":"ehmidan",
    "lage":20,
    "location":"tange",
    "skills":["html","css","javascript"],
    "adresses":{
        "tanger":"jirari",
        "marakech":"hey lbhja",
        "chefchawen":"ras lma",
        "germany":[
            "one",
            "two",
            "three"
        ]
    },
    "working":false,
    "identity":null 
};
for (x in contact)
if (x=="skills")
for(i=0;i<contact[x].length;i++)
console.log("skill"+(i+1)+" :"+(contact[x][i]));
else
if(x=="adresses")
console.log("habbite a :",contact[x].marakech)
else 
console.log(contact[x]);



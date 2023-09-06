module.exports = {
 name: "removefilter",
 code: `
 $let[s;$removeFilter[{"nightCore", "8D", "karaoke", "bassBoost": "0"}]]

 $title[Removed]
 $description[Removed all the applied filers successfully!]
 $addTimestamp
 $color[Random]
 `


  
}

module.exports = {
    name: "whitelist",
    code: `
$title[Done]
$description[> User $username[$message[1]] has been whitelisted!]
$color[Green]
$thumbnail[$useravatar[$message[1]]]
    $setGlobaluserVar[blacklist;false;$message[1]]
    $onlyif[$message[1]!=;An id?]
    $onlyif[$authorID==964024743172915220;owner only buddy]
    `
}
module.exports = {
    name: "blacklist",
    code: `
    $title[Done]
$description[> User $username[$message[1]] has been blacklisted!]
$color[Red]
$thumbnail[$useravatar[$message[1]]]
    $setGlobaluserVar[blacklist;true;$message[1]]
    $setGlobalUserVar[blacklistreason;$replaceText[$message;$message[1];];$message[1]]
    $onlyif[$message[1]!=;An id?]
    $onlyif[$authorID==964024743172915220;owner only buddy]
    `
}
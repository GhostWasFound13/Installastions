module.exports = ({
  name: "help ticket",
  code: ` $title[ ** here all my list of my ticket commamd **]
  $description[ ** command count: 18 ticket command **
$getVar[prefix]panel - This will send the support (staff) panel in the ticket.
$getVar[prefix]set-role (@role or role ID) - This will set the support team role.
$getVar[prefix]set-category (category ID) - This will set the category of channels where the ticket should open.
$getVar[prefix]remove-role - This will reset the ticket role.
$getVar[prefix]remove-category - This will reset the ticket category.
$getVar[prefix]ticket (#channel) - This will send the ticket panel aka the open ticket embed in the specified channel.
$getVar[prefix]enable-ticket - To enable the ticket system.
$getVar[prefix]disable-ticket - To disable it.
$getVar[prefix]claim - To claim the ticket.
$getVar[prefix]transcript - To save the transcript.
$getVar[prefix]close - Close the ticket.
$getVar[prefix]tran-ch (#channel) - To set the transcript save channel.
$getVar[prefix]set-tick-title (message) - It will set the ticket title aka the embed which will be sent inside the ticket's title.
$getVar[prefix]set-tick-msg (message) - It will set the ticket description or message.
$getVar[prefix]set-tick-button (message) - This will set the button text of ticket opening.
$getVar[prefix]set-ch-name (message[1]) - This will set the ticket channel name which will be followed by the $userTag.
$getVar[prefix]set-panel-desc (message) - Will set the ticket panel description.
$getVar[prefix]set-panel-title (message) - Will set the ticket panel title.
]
$footer[ requesting by $username[authorID];$userAvatar]
$color[random]
$addTimestamp
$cooldown[1m; slow down try to use this command please wait]
`
})

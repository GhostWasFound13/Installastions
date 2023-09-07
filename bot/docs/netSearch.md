$netSearch[query;format;limit]

# Vars:
{title}: Represents the title of each search result.

{link}: Represents the URL or link of each search result.

{snippet}: Represents a brief snippet or description of each search result.

# EXAMPLES OF VARS:
Display only the titles: $netSearch[$message;{title};5]

Display the titles and URLs: $netSearch[$message;{title} - {link};5]

Display the titles, URLs, and snippets: $netSearch[$message;{title} - {link}\n{snippet};5]

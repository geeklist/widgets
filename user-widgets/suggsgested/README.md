# User Geeklist Widgets Directory

## suggsgested

### Badges Use

  <img src="https://github.com/Suggsgested/widgets/raw/master/user-widgets/suggsgested/badges-screenshot.png" />

- Include the file GeekList-badges-SB.js in your website.

- Add the following code where you want to show your geeklist card stats:

        <div id="results"></div>
		<script type="text/javascript">
			$(document).ready(function() {
				$('#results').geeklistbadge({username: 'suggsgested'});
			});
		</script>

- Edit the variable 'username' to the Geeklist username which cards you want to show:		
		
[Proof Of Concept](http://jsfiddle.net/suggsgested/2cQHf/)


### Google Chrome Extension (Beta)

  <img src="https://github.com/Suggsgested/widgets/raw/master/user-widgets/suggsgested/chromeEX-screenshot.png" />

- To install from GitHub download and extract all files located in this repo

- Bring up the extensions management page by clicking the wrench icon and choosing Tools > Extensions.

- If Developer mode has a + by it, click the + to add developer information to the page. The + changes to a -, and more buttons and information appear.

- Click the Load unpacked extension button. A file dialog appears.

- In the file dialog, navigate to the extension's folder (/user-widgets/suggsgested/ChomeEx) and click OK.


 <img src="https://github.com/Suggsgested/widgets/raw/master/user-widgets/suggsgested/chromeEX-screenshot-3.png" />


- This Chrome extension will utilize the Geekli.st JSON API to generate and display a "Geek Cred" number overlayed on the activily selected Geek from the Discovery Feed. The "Geek Cred" number is calculated as (Total Highfives + Total Views) / Number of Cards

- This Chrome extension will also add filtering buttons to the Geekli.st Discovery Feed
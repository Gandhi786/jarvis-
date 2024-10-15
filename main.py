import os
import eel

#from engine.features import playAssistantSound

# Initialize Eel with the "www" folder where your web files (HTML, CSS, JS) are located
eel.init("www")

# Start the application in Microsoft Edge
os.system('start msedge.exe --app="http://localhost:8000/index.html"')

# Start the Eel server, serving the index.html file
eel.start('index.html', mode=None, host='localhost', block=True)

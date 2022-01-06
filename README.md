# Home-Assistant-NZXT-LEDS
Changing the colours of your NZXT PC via Home Assistant running WINDOWS 10

A branch from SAM CROSS - https://gitlab.com/fsamjcross/nzxt-hue-home-homeassistant 
ALL credit to Sam for the initial work on this project.  I have merely edited some minor parameters.

NOTE - Look through the uploaded files to change file paths and IP addresses to your requirements

Step by step guide to providing users with the option to change the LED colours on their NZXT pc running V2 Firmware.

1. download https://github.com/liquidctl/liquidctl
2. download and install https://nodejs.org/en/
3. copy index.js in to same folder as liquidctl
4. Stop the native NZXT app from running i.e. exit if running and stop running on startup.  They can't work together with Liquidctl.
5. Test that liquidctl can now send commands to your leds via CMD.  for example - liquidctl set sync color spectrum-wave
6. Copy the YAML from the config.yaml in to your own configuration.YAML and change the IP address of your PC.  Restart Home Assistant
7. Add the entity to HA once restarted to make a switch.
8. Run the node server via CMD - node index.js
9. Change a colour via HA and the command should be sent to CMD console and change the colour of the LED lights.
10. Set up the node server to run on startup.  I did this via VBS script that is hidden running a .bat file.
11. AND your're done.

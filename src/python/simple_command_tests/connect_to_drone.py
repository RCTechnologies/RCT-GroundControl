# pylint: skip-file
from dronekit import connect, VehicleMode
import dronekit_sitl
import sys
import subprocess
import os


sitl = dronekit_sitl.start_default()
connection_string = sitl.connection_string()

argument = sys.stdin.readline()
# If argument is a connection_string
if argument != 'none':
    connection_string = argument

vehicle = connect(connection_string, wait_ready=True)

if vehicle._heartbeat_started:
    print '0'
else:
    print '1'

sys.stdout.flush()

#Close vehicle object before exiting script
#print "Close vehicle object"
vehicle.close()

# Shut down simulator if it was started.
if sitl is not None:
    sitl.stop()
# pylint: skip-file
from time import sleep
from dronekit import connect, VehicleMode
# (in this case a TCP endpoint)
connectionstring = 'tcp:127.0.0.1:5760'

# Connect to the Vehicle 
vehicle = connect(connectionstring, wait_ready=True)

def arm_takeoff_land(targetaltitude):
    """
    Arms vehicle, fly to targetAltitude and lands again.
    """

    print "Basic pre-arm checks"
    # Don't try to arm until autopilot is ready
    while not vehicle.is_armable:
        print " Waiting for vehicle to initialise..."
        sleep(1)

    print "Arming motors"
    # Copter should arm in GUIDED mode
    vehicle.mode    = VehicleMode("GUIDED")
    vehicle.armed   = True

    # Confirm vehicle armed before attempting to take off
    while not vehicle.armed:
        print " Waiting for arming..."
        sleep(1)

    print "Taking off!"
    vehicle.simple_takeoff(targetaltitude) # Take off to target altitude

    # Wait until the vehicle reaches a safe height before processing the goto (otherwise the command
    #  after Vehicle.simple_takeoff will execute immediately).
    while True:
        print " Altitude: ", vehicle.location.global_relative_frame.alt
        #Break and return from function just below target altitude.
        if vehicle.location.global_relative_frame.alt>=targetaltitude*0.95:
            print "Reached target altitude"
            break
        sleep(1)
    


arm_takeoff_land(3)
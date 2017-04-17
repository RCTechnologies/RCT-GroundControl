import time
import datetime

timestamp = time.time()
timestampstring = datetime.datetime.fromtimestamp(timestamp).strftime('Timestamp - %Y/%m/%d_%H:%M:%S\n')

file = open('./src/python/misc/timestamp.txt','a')
file.write(timestampstring)
file.close()
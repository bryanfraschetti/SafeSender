import numpy as np
import os 
import cv2
import sys

# inputKeyPath = sys.argv[1]
# cipherKeyPath = sys.argv[2]
cipherKeyPath = r"C:\Users\sahme\Desktop\cipherImg.npy"
inputKeyPath = r"C:\Users\sahme\Desktop\key.npy"

# cipherKeyPath = r"C:\Users\sahme\AppData\Roaming\electron-quick-start\cipherImg.npy"
# inputKeyPath = r"C:\Users\sahme\AppData\Roaming\electron-quick-start\key.npy"

desktop_path = os.path.join(os.path.join(os.environ['USERPROFILE']), 'Desktop') 
key_path = inputKeyPath
cipher_path =cipherKeyPath

decipherImg = np.empty((272,185,3), dtype = int)

key = np.load(key_path)
cipherImg = np.load(cipher_path)


decipherImg[:,:,0] = np.matmul(cipherImg[:,:,0],np.linalg.inv(key[:,:,0]))
decipherImg[:,:,1] = np.matmul(cipherImg[:,:,1],np.linalg.inv(key[:,:,1]))
decipherImg[:,:,2] = np.matmul(cipherImg[:,:,2],np.linalg.inv(key[:,:,2]))


cv2.imwrite(f'{desktop_path}/decipherImg.png', decipherImg)

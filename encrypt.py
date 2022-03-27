import numpy as np 
import cv2
import os
import sys
# inputPath = sys.argv[1]
inputPath = r"C:\Users\sahme\Desktop\safe.jpg"

desktop_path = os.path.join(os.path.join(os.environ['USERPROFILE']), 'Desktop') 
size = 185
a1 = np.random.rand(size,size)
a2 = np.random.rand(size,size)
a3 = np.random.rand(size,size)

plainImg = np.empty((272,185,3))
cipherImg = np.empty((272,185,3))
decipherImg = np.empty((272,185,3), dtype = int)
key = np.empty((185,185,3))


key[:,:,0] = np.linalg.inv(a1)
key[:,:,1] = np.linalg.inv(a2)
key[:,:,2] = np.linalg.inv(a3)
# print("key", key[0][0][0])
# cv2.imwrite('key.jpg', key)
# cv2.imshow("key.jpg", key)

path = inputPath
plainImg = cv2.imread(path)

# print("plain", plainImg[0][0][0])
# cv2.imwrite('plain.jpg', plainImg)
# cv2.imshow("plain.jpg", plainImg)

cipherImg[:,:,0] = np.matmul(plainImg[:,:,0],key[:,:,0])
cipherImg[:,:,1] = np.matmul(plainImg[:,:,1],key[:,:,1])
cipherImg[:,:,2] = np.matmul(plainImg[:,:,2],key[:,:,2])
# print("cipher", cipherImg[0][0][0])
cv2.imwrite(f'{desktop_path}/cipherImg.jpg', cipherImg)
cv2.imshow("cipher.jpg", cipherImg)


np.save(f"{desktop_path}/cipherImg",cipherImg)
np.save(f"{desktop_path}/key",key)
cv2.waitKey()
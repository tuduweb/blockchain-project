# with open("./contracts/Student.sol","r") as f:
#     res=f.read()
# if ('0.4.21' in res) and ('0.8.0' in res):
#     print("通关成功")
# else:
#     print("通关失败")

with open("./out.txt","r") as f:
    res=f.read()
    txt=res.split("||")[1]
    #print(txt)
if(txt=="10"):
    print("通关成功")
else:
    print("通关失败")
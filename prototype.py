import tkinter as tk
from tkinter import messagebox

guides = {
    "PET": {
        "제품": "에코백, 운동복 원단, 재활용 병",
        "방법": "깨끗이 세척 후 분쇄, 원사로 재생하여 섬유 제품 제작"
    },
    "HDPE": {
        "제품": "수납함, 정원용 화분, 가구 부품",
        "방법": "분쇄 후 열가압해 판재로 가공, 조립하여 생활용품 제작"
    },
    "PP": {
        "제품": "전자레인지용 용기, 캠핑용 보틀, 수납함",
        "방법": "세척 후 사출성형으로 제품 제작"
    },
    "PS": {
        "제품": "단열재, 포장재, 완충재",
        "방법": "분쇄 후 재가공해 단열재 및 포장재로 활용"
    }
}

def show_guide(plastic_type):
    info = guides.get(plastic_type)
    if info:
        result_text = f"[{plastic_type} 플라스틱 업사이클링 가이드]\n\n추천 제품: {info['제품']}\n제작 방법: {info['방법']}"
        result_label.config(text=result_text)
    else:
        messagebox.showerror("오류", "해당 플라스틱 종류에 대한 정보가 없습니다.")
        result_label.config(text="")

root = tk.Tk()
root.title("플라스틱 업사이클링 가이드")
root.geometry("450x300")
root.resizable(False, False)

label = tk.Label(root, text="플라스틱 종류를 선택하세요", font=("맑은 고딕", 12))
label.pack(pady=15)

button_frame = tk.Frame(root)
button_frame.pack(pady=10)

for plastic in guides.keys():
    btn = tk.Button(button_frame, text=plastic, width=10, height=2,
                    command=lambda p=plastic: show_guide(p))
    btn.pack(side='left', padx=10)

result_label = tk.Label(root, text="", font=("맑은 고딕", 11), justify='left', wraplength=420)
result_label.pack(pady=20)

root.mainloop()

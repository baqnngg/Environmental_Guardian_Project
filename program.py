import tkinter as tk
import json
from tkinter import messagebox

# JSON 파일에서 데이터 로드
with open("data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

class UpcycleApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("플라스틱 업사이클링 가이드")
        self.geometry("550x400")
        self.resizable(False, False)

        self.current_type = None
        self.current_product = None

        self.create_widgets()

    def create_widgets(self):
        self.frame_main = tk.Frame(self)
        label = tk.Label(self.frame_main, text="플라스틱 종류를 선택하세요", font=("맑은 고딕", 14))
        label.pack(pady=15)

        for p_type in data.keys():
            btn = tk.Button(self.frame_main, text=p_type, width=15, height=2,
                            command=lambda t=p_type: self.show_products(t))
            btn.pack(pady=5)

        self.frame_main.pack(fill="both", expand=True)

        self.frame_products = tk.Frame(self)

        self.products_label = tk.Label(self.frame_products, text="", font=("맑은 고딕", 14))
        self.products_label.pack(pady=15)

        self.products_buttons_frame = tk.Frame(self.frame_products)
        self.products_buttons_frame.pack()

        self.btn_back_to_main = tk.Button(self.frame_products, text="← 뒤로", command=self.back_to_main)
        self.btn_back_to_main.pack(pady=15)

        self.frame_guide = tk.Frame(self)

        self.guide_label = tk.Label(self.frame_guide, text="", font=("맑은 고딕", 12), justify="left", wraplength=500)
        self.guide_label.pack(pady=15)

        self.btn_back_to_products = tk.Button(self.frame_guide, text="← 뒤로", command=self.back_to_products)
        self.btn_back_to_products.pack(pady=10)

    def show_products(self, plastic_type):
        self.current_type = plastic_type
        self.frame_main.pack_forget()

        self.products_label.config(text=f"{plastic_type}로 만들 수 있는 용품")
        for widget in self.products_buttons_frame.winfo_children():
            widget.destroy()

        for product in data[plastic_type].keys():
            btn = tk.Button(self.products_buttons_frame, text=product, width=20, height=2,
                            command=lambda prod=product: self.show_guide(prod))
            btn.pack(pady=5)

        self.frame_products.pack(fill="both", expand=True)

    def back_to_main(self):
        self.frame_products.pack_forget()
        self.frame_main.pack(fill="both", expand=True)

    def show_guide(self, product):
        self.current_product = product
        self.frame_products.pack_forget()

        guide_text = data[self.current_type][product]
        self.guide_label.config(text=f"[{self.current_type} - {product}]\n\n{guide_text}")

        self.frame_guide.pack(fill="both", expand=True)

    def back_to_products(self):
        self.frame_guide.pack_forget()
        self.frame_products.pack(fill="both", expand=True)

if __name__ == "__main__":
    app = UpcycleApp()
    app.mainloop()

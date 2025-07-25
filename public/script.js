const data = {
  "PET": {
    "description": "가소성, 투명 (생수병, 음료병)",
    "items": {
      "비누통": [
        "PET 병을 깨끗이 세척하고 말립니다.",
        "칼이나 가위를 이용해 병을 적절한 크기로 자릅니다.",
        "뚜껑과 결합하거나 뚜껑을 만들어 비누통을 만듭니다."
      ],
      "화분": [
        "PET 병의 아래 부분을 잘라냅니다.",
        "밑에 구멍을 내 배수를 가능하게 합니다.",
        "흙과 식물을 심으면 나만의 화분 완성!"
      ]
    }
  },
  "HDPE": {
    "description": "내열성 (샴푸통, 세제용기)",
    "items": {
      "샴푸통": [
        "HDPE 소재 용기를 세척합니다.",
        "펌프를 끼워 리필 가능한 샴푸통으로 사용합니다."
      ],
      "레고형 수납 박스": [
        "HDPE를 분쇄하여 플레이크를 만듭니다.",
        "사출기로 녹여 레고형 금형에 넣고 굽습니다.",
        "완성 후 조립 가능한 박스로 활용할 수 있습니다."
      ]
    }
  },
  "PP": {
    "description": "내열성, 가벼움 (컵, 빨대, 김치통)",
    "items": {
      "전자레인지용 도시락통": [
        "PP 용기를 세척 후 열에 강한 뚜껑과 함께 사용합니다.",
        "안전한 전자레인지용 도시락통으로 재사용 가능합니다."
      ],
      "키링": [
        "PP 병뚜껑을 분쇄하여 플레이크로 만듭니다.",
        "원하는 색상의 플레이크를 선택하여 금형에 넣습니다.",
        "녹인 후 사출하고 식혀서 키링 완성!"
      ]
    }
  }
};

const container = document.getElementById("guide-container");

for (const [type, { description, items }] of Object.entries(data)) {
  const category = document.createElement("div");
  category.className = "category";

  const title = document.createElement("h2");
  title.textContent = `${type} - ${description}`;
  category.appendChild(title);

  for (const [itemName, steps] of Object.entries(items)) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = itemName;
    itemDiv.appendChild(itemTitle);

    const list = document.createElement("ul");
    for (const step of steps) {
      const li = document.createElement("li");
      li.textContent = step;
      list.appendChild(li);
    }
    itemDiv.appendChild(list);
    category.appendChild(itemDiv);
  }

  container.appendChild(category);
}

const cardList = document.getElementById("card-list");
const detail = document.getElementById("detail");
const welcomeContent = document.getElementById("welcome-content");

// JSON 데이터를 직접 포함 (data.json 내용)
const plasticData = {
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

// 카드 생성
function createCard(type, description) {
  const card = document.createElement("div");
  card.className = "card";
  card.tabIndex = 0;

  const title = document.createElement("h3");
  title.textContent = type;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = description;
  card.appendChild(desc);

  card.addEventListener("click", () => {
    showDetail(type);
    highlightCard(card);
  });

  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.click();
    }
  });

  return card;
}

// 카드 강조 효과
function highlightCard(selectedCard) {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("selected", card === selectedCard);
  });
}

// 상세 내용 표시
function showDetail(type) {
  // 환영 메시지 숨기기
  if (welcomeContent) {
    welcomeContent.style.display = "none";
  }

  // 내용 초기화
  detail.innerHTML = "";

  const dataType = plasticData[type];
  if (!dataType) return;

  // 제목 생성
  const title = document.createElement("h2");
  title.textContent = `${type} - ${dataType.description}`;
  detail.appendChild(title);

  // 각 아이템별 내용 생성
  for (const [itemName, steps] of Object.entries(dataType.items)) {
    const itemTitle = document.createElement("h3");
    itemTitle.textContent = itemName;
    detail.appendChild(itemTitle);

    const ul = document.createElement("ul");
    steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      ul.appendChild(li);
    });
    detail.appendChild(ul);
  }
}

// 초기화
function init() {
  try {
    for (const [type, { description }] of Object.entries(plasticData)) {
      const card = createCard(type, description);
      cardList.appendChild(card);
    }
  } catch (error) {
    detail.innerHTML = `<p style="color: #dc3545;">데이터를 불러오는데 실패했습니다: ${error.message}</p>`;
  }
}

// 키보드 네비게이션
document.addEventListener('keydown', (e) => {
  const cards = document.querySelectorAll('.card');
  const currentIndex = Array.from(cards).findIndex(card => card === document.activeElement);
  
  if (e.key === 'ArrowDown' && currentIndex < cards.length - 1) {
    e.preventDefault();
    cards[currentIndex + 1].focus();
  } else if (e.key === 'ArrowUp' && currentIndex > 0) {
    e.preventDefault();
    cards[currentIndex - 1].focus();
  }
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);
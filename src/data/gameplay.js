import { getAssetPath } from "@/lib/utils";

const sharedNodeMeta = [
  { x: 12, y: 30, labelPlacement: "bottom", labelWidth: 132, type: "start" },
  { x: 24, y: 14, labelPlacement: "bottom", labelWidth: 154, type: "challenge", questionIndex: 0 },
  { x: 40, y: 10, labelPlacement: "bottom", labelWidth: 148, type: "challenge", questionIndex: 1 },
  { x: 57, y: 13, labelPlacement: "bottom", labelWidth: 136, type: "challenge", questionIndex: 2 },
  { x: 74, y: 11, labelPlacement: "bottom", labelWidth: 146, type: "challenge", questionIndex: 3 },
  { x: 90, y: 23, labelPlacement: "top", labelWidth: 154, type: "challenge", questionIndex: 4 },
  { x: 80, y: 48, labelPlacement: "left", labelWidth: 132, type: "challenge", questionIndex: 5 },
  { x: 60, y: 62, labelPlacement: "bottom", labelWidth: 138, type: "challenge", questionIndex: 6 },
  { x: 41, y: 55, labelPlacement: "left", labelWidth: 156, type: "challenge", questionIndex: 7 },
  { x: 23, y: 72, labelPlacement: "bottom", labelWidth: 128, type: "challenge", questionIndex: 8 },
  { x: 49, y: 82, labelPlacement: "bottom", labelWidth: 134, type: "exit", questionIndex: 9 }
];

function createMazeLayout(stageNumber, labels) {
  return sharedNodeMeta.map((node, index) => ({
    id: index,
    ...node,
    label: labels[index],
    image: getAssetPath(`images/stage-${stageNumber}-node-${Math.min(index, 10) || 1}.png`)
  }));
}

const stage1Questions = [
  {
    question: "Chủ nghĩa xã hội khoa học nghiên cứu chủ yếu nội dung nào dưới đây?",
    answers: [
      "Quy luật, con đường và điều kiện hiện thực hóa chủ nghĩa xã hội và chủ nghĩa cộng sản",
      "Chỉ nghiên cứu các học thuyết đạo đức cổ đại",
      "Chỉ nghiên cứu sự vận động của giá cả thị trường",
      "Chỉ nghiên cứu tâm lý cá nhân trong đời sống xã hội"
    ],
    correct: 0,
    category: "Khởi nguyên môn học",
    explanation:
      "Chủ nghĩa xã hội khoa học tập trung làm rõ cơ sở khách quan, lực lượng xã hội và con đường lịch sử để xây dựng xã hội mới."
  },
  {
    question: "Điểm khác biệt cốt lõi giữa chủ nghĩa xã hội khoa học và chủ nghĩa xã hội không tưởng là gì?",
    answers: [
      "Chủ nghĩa xã hội khoa học có cơ sở lý luận và thực tiễn, gắn với quy luật vận động của xã hội",
      "Chủ nghĩa xã hội khoa học chỉ quan tâm đến lòng tốt của con người",
      "Chủ nghĩa xã hội khoa học phủ nhận vai trò của quần chúng nhân dân",
      "Chủ nghĩa xã hội khoa học chỉ là tập hợp các khẩu hiệu tuyên truyền"
    ],
    correct: 0,
    category: "Bản chất khoa học",
    explanation:
      "Chủ nghĩa xã hội khoa học dựa trên nền tảng khoa học về lịch sử và thực tiễn đấu tranh xã hội, không dừng ở mong muốn tốt đẹp."
  },
  {
    question: "Một cơ sở lý luận trực tiếp của chủ nghĩa xã hội khoa học là gì?",
    answers: [
      "Thần học trung cổ",
      "Chủ nghĩa duy vật lịch sử",
      "Thuyết địa tâm cổ đại",
      "Chủ nghĩa kinh nghiệm thuần túy"
    ],
    correct: 1,
    category: "Cơ sở lý luận",
    explanation:
      "Chủ nghĩa duy vật lịch sử giúp giải thích sự phát triển xã hội bằng những quy luật khách quan."
  },
  {
    question: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học được hiểu đúng nhất là gì?",
    answers: [
      "Chỉ nghiên cứu mô hình tổ chức doanh nghiệp hiện đại",
      "Chỉ nghiên cứu ý thức đạo đức của từng cá nhân",
      "Những quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa",
      "Chỉ nghiên cứu các cuộc cách mạng trong thời cổ đại"
    ],
    correct: 2,
    category: "Đối tượng nghiên cứu",
    explanation:
      "Môn học hướng tới các quy luật và điều kiện lịch sử - xã hội làm nảy sinh và hiện thực hóa xã hội xã hội chủ nghĩa."
  },
  {
    question: "Sự ra đời của chủ nghĩa xã hội khoa học gắn trực tiếp với phát hiện lý luận nào của C. Mác và Ph. Ăngghen?",
    answers: [
      "Học thuyết về tam quyền phân lập",
      "Học thuyết về đấu tranh giai cấp và sứ mệnh lịch sử của giai cấp công nhân",
      "Học thuyết về bản năng bầy đàn",
      "Học thuyết về nền kinh tế tự cấp tự túc"
    ],
    correct: 1,
    category: "Nguồn gốc hình thành",
    explanation:
      "Phát hiện vai trò lịch sử của giai cấp công nhân đã chuyển chủ nghĩa xã hội từ không tưởng thành khoa học."
  },
  {
    question: "Cơ sở thực tiễn quan trọng thúc đẩy sự hình thành chủ nghĩa xã hội khoa học là gì?",
    answers: [
      "Sự phát triển của phong trào công nhân và những mâu thuẫn của chủ nghĩa tư bản",
      "Việc quay lại với mô hình xã hội bộ lạc nguyên thủy",
      "Sự biến mất hoàn toàn của giai cấp trong xã hội tư bản",
      "Sự phát triển riêng lẻ của nghệ thuật trang trí"
    ],
    correct: 0,
    category: "Cơ sở thực tiễn",
    explanation:
      "Phong trào công nhân trưởng thành cùng với mâu thuẫn nội tại của chủ nghĩa tư bản là nền thực tiễn để môn học ra đời."
  },
  {
    question: "Trong hệ thống chủ nghĩa Mác - Lênin, chủ nghĩa xã hội khoa học giữ vai trò nổi bật nào?",
    answers: [
      "Chỉ là phần phụ không liên quan đến thực tiễn cách mạng",
      "Là bộ phận trực tiếp định hướng cho hoạt động chính trị - xã hội nhằm cải tạo hiện thực",
      "Chỉ dùng để minh họa lịch sử triết học",
      "Thay thế hoàn toàn cho kinh tế chính trị học"
    ],
    correct: 1,
    category: "Vị trí môn học",
    explanation:
      "Bộ phận này hướng trực tiếp tới con đường hành động cải biến xã hội."
  },
  {
    question: "Ý nghĩa phương pháp luận nổi bật của việc học chương mở đầu này là gì?",
    answers: [
      "Giúp người học có cách nhìn hệ thống, khoa học về tiến trình vận động và biến đổi xã hội",
      "Chỉ giúp ghi nhớ tên các học giả",
      "Chỉ để làm bài thi trắc nghiệm",
      "Tách rời lý luận khỏi thực tiễn đời sống"
    ],
    correct: 0,
    category: "Ý nghĩa phương pháp luận",
    explanation:
      "Chương 1 giúp xác định được cách tiếp cận khoa học, toàn diện và lịch sử - cụ thể đối với các vấn đề xã hội."
  },
  {
    question: "Đối với sinh viên, học chủ nghĩa xã hội khoa học trước hết giúp hình thành điều gì?",
    answers: [
      "Khả năng thay thế toàn bộ các môn khoa học khác",
      "Thế giới quan và bản lĩnh chính trị đúng đắn khi nhìn nhận các vấn đề xã hội",
      "Kỹ năng tính toán kỹ thuật chuyên sâu",
      "Khả năng ghi nhớ máy móc mọi khẩu hiệu"
    ],
    correct: 1,
    category: "Ý nghĩa đối với người học",
    explanation:
      "Môn học giúp sinh viên xây dựng thế giới quan khoa học và thái độ chính trị đúng đắn."
  },
  {
    question: "Kết luận phù hợp nhất sau khi hoàn thành Chương 1 là gì?",
    answers: [
      "Chủ nghĩa xã hội khoa học chỉ là tập hợp các ước mơ đẹp về tương lai",
      "Chủ nghĩa xã hội khoa học là môn học vừa có cơ sở khoa học vừa gắn chặt với mục tiêu cải tạo xã hội hiện thực",
      "Chủ nghĩa xã hội khoa học chỉ có giá trị trong lịch sử, không còn ý nghĩa hiện nay",
      "Chủ nghĩa xã hội khoa học chỉ nghiên cứu quá khứ, không định hướng tương lai"
    ],
    correct: 1,
    category: "Tổng kết chương",
    explanation:
      "Bản chất của môn học nằm ở tính khoa học, tính cách mạng và khả năng định hướng thực tiễn."
  }
];

const stage2Questions = [
  {
    question: "Sứ mệnh lịch sử của giai cấp công nhân được hiểu khái quát là gì?",
    answers: [
      "Lãnh đạo đấu tranh xóa bỏ chủ nghĩa tư bản, xây dựng xã hội mới xã hội chủ nghĩa",
      "Chỉ đấu tranh đòi tăng lương trong từng doanh nghiệp",
      "Thay thế mọi giai cấp khác bằng đặc quyền mới",
      "Rút khỏi đời sống chính trị để giữ tính trung lập"
    ],
    correct: 0,
    category: "Khái niệm",
    explanation:
      "Sứ mệnh lịch sử của giai cấp công nhân gắn với việc cải biến toàn bộ xã hội theo định hướng xã hội chủ nghĩa."
  },
  {
    question: "Cơ sở khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?",
    answers: [
      "Vị trí của họ trong nền đại công nghiệp và quan hệ với lực lượng sản xuất hiện đại",
      "Sự ưu ái riêng của nhà nước",
      "Khả năng sở hữu tư liệu sản xuất nhiều nhất",
      "Địa vị trung gian giữa các giai cấp"
    ],
    correct: 0,
    category: "Cơ sở khách quan",
    explanation:
      "Chính địa vị kinh tế - xã hội của giai cấp công nhân trong nền sản xuất hiện đại quy định vai trò lịch sử của họ."
  },
  {
    question: "Đặc điểm nào sau đây gắn trực tiếp với bản chất cách mạng của giai cấp công nhân?",
    answers: [
      "Lao động tập thể, có kỷ luật và gắn với nền sản xuất hiện đại",
      "Sở hữu tư bản tài chính lớn",
      "Sống phân tán, tách rời nhau",
      "Không có nhu cầu tổ chức chính trị"
    ],
    correct: 0,
    category: "Đặc điểm",
    explanation:
      "Quá trình lao động công nghiệp hiện đại rèn luyện giai cấp công nhân về tổ chức, kỷ luật và tinh thần tập thể."
  },
  {
    question: "Điều kiện chủ quan quan trọng hàng đầu để giai cấp công nhân thực hiện sứ mệnh lịch sử là gì?",
    answers: [
      "Có chính đảng cộng sản lãnh đạo",
      "Có đặc quyền kinh tế vượt trội",
      "Không cần liên minh với lực lượng xã hội khác",
      "Tách rời mục tiêu dân tộc khỏi mục tiêu giai cấp"
    ],
    correct: 0,
    category: "Điều kiện chủ quan",
    explanation:
      "Đảng Cộng sản là nhân tố bảo đảm cho sự thống nhất về lý luận, tổ chức và đường lối hành động."
  },
  {
    question: "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân thể hiện ở điểm nào?",
    answers: [
      "Xây dựng quan hệ sản xuất mới phù hợp với tính chất xã hội hóa của lực lượng sản xuất",
      "Duy trì nguyên trạng sở hữu tư bản chủ nghĩa",
      "Phủ nhận vai trò của khoa học - công nghệ",
      "Chỉ tập trung vào tiêu dùng trước mắt"
    ],
    correct: 0,
    category: "Nội dung kinh tế",
    explanation:
      "Nội dung kinh tế gắn với việc tổ chức lại nền sản xuất trên cơ sở công hữu và quản lý xã hội hóa."
  },
  {
    question: "Nội dung chính trị trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
    answers: [
      "Giành chính quyền và sử dụng quyền lực nhà nước để cải tạo xã hội cũ, xây dựng xã hội mới",
      "Tránh tham gia mọi hoạt động chính trị",
      "Chỉ tham gia tư vấn cho giai cấp tư sản",
      "Tách rời quyền lực nhà nước khỏi nhân dân lao động"
    ],
    correct: 0,
    category: "Nội dung chính trị",
    explanation:
      "Nội dung chính trị thể hiện ở việc thiết lập quyền lực của nhân dân lao động dưới sự lãnh đạo của giai cấp công nhân."
  },
  {
    question: "Vì sao nói liên minh giữa giai cấp công nhân với nông dân và trí thức là cần thiết?",
    answers: [
      "Vì đó là cơ sở xã hội rộng lớn để thực hiện nhiệm vụ cách mạng",
      "Vì công nhân không có vai trò trung tâm",
      "Vì chỉ nông dân mới quyết định toàn bộ tiến trình lịch sử",
      "Vì liên minh này thay thế vai trò của Đảng"
    ],
    correct: 0,
    category: "Liên minh xã hội",
    explanation:
      "Liên minh công - nông - trí thức tạo nền tảng chính trị - xã hội cho việc xây dựng xã hội mới."
  },
  {
    question: "Trong điều kiện hiện nay, giai cấp công nhân hiện đại có biến đổi nào nổi bật?",
    answers: [
      "Trình độ tri thức, công nghệ và tính quốc tế hóa trong lao động ngày càng tăng",
      "Hoàn toàn biến mất khỏi quá trình sản xuất",
      "Không còn gắn với công nghiệp và dịch vụ hiện đại",
      "Chỉ tồn tại trong khu vực thủ công truyền thống"
    ],
    correct: 0,
    category: "Bối cảnh hiện đại",
    explanation:
      "Sự phát triển của khoa học - công nghệ làm cho công nhân hiện đại có hàm lượng tri thức ngày càng cao."
  },
  {
    question: "Ở Việt Nam, giai cấp công nhân có vai trò gì trong sự nghiệp đổi mới?",
    answers: [
      "Là lực lượng đi đầu trong công nghiệp hóa, hiện đại hóa và xây dựng chủ nghĩa xã hội",
      "Chỉ giữ vai trò thứ yếu về chính trị",
      "Không liên quan đến liên minh công - nông - trí thức",
      "Tách rời hoàn toàn mục tiêu dân tộc với mục tiêu xã hội chủ nghĩa"
    ],
    correct: 0,
    category: "Liên hệ Việt Nam",
    explanation:
      "Trong thời kỳ đổi mới, giai cấp công nhân tiếp tục là lực lượng nòng cốt trong phát triển lực lượng sản xuất hiện đại."
  },
  {
    question: "Kết luận phù hợp nhất về sứ mệnh lịch sử của giai cấp công nhân là gì?",
    answers: [
      "Đó là quá trình vừa khách quan vừa cần điều kiện tổ chức, chính trị và liên minh xã hội phù hợp",
      "Đó là nhiệm vụ chỉ có ý nghĩa trong thế kỷ XIX",
      "Đó là khẩu hiệu không gắn với thực tiễn",
      "Đó là nhiệm vụ chỉ do một nhóm nhỏ thực hiện"
    ],
    correct: 0,
    category: "Tổng kết",
    explanation:
      "Sứ mệnh lịch sử của giai cấp công nhân là một quá trình hiện thực, cần cả cơ sở khách quan lẫn điều kiện chủ quan."
  }
];

const stage3Questions = [
  {
    question: "Khái niệm thời kỳ quá độ lên chủ nghĩa xã hội được hiểu đúng là gì?",
    answers: [
      "Thời kỳ chuyển biến sâu sắc từ xã hội cũ sang xã hội mới với nhiều hình thức kinh tế - xã hội đan xen",
      "Giai đoạn xã hội chủ nghĩa đã hoàn chỉnh",
      "Khoảng thời gian không cần nhà nước quản lý",
      "Giai đoạn quay lại quan hệ sản xuất cũ"
    ],
    correct: 0,
    category: "Khái niệm",
    explanation:
      "Thời kỳ quá độ là một quá trình cải biến toàn diện, lâu dài và phức tạp từ xã hội cũ sang xã hội mới."
  },
  {
    question: "Vì sao thời kỳ quá độ lên chủ nghĩa xã hội là tất yếu?",
    answers: [
      "Vì không thể ngay lập tức xóa bỏ mọi dấu vết của xã hội cũ và xây dựng hoàn chỉnh xã hội mới",
      "Vì chủ nghĩa xã hội không cần cơ sở vật chất",
      "Vì quan hệ sản xuất tự thay đổi mà không cần hoạt động có ý thức",
      "Vì chỉ là giai đoạn mang tính hình thức"
    ],
    correct: 0,
    category: "Tính tất yếu",
    explanation:
      "Sự khác biệt sâu sắc giữa xã hội cũ và xã hội mới đòi hỏi một giai đoạn chuyển tiếp lịch sử."
  },
  {
    question: "Đặc điểm kinh tế nổi bật của thời kỳ quá độ là gì?",
    answers: [
      "Tồn tại nhiều thành phần kinh tế trong một cơ cấu kinh tế quá độ",
      "Chỉ có một thành phần kinh tế duy nhất ngay từ đầu",
      "Không còn nhu cầu phát triển lực lượng sản xuất",
      "Không có sự quản lý của nhà nước"
    ],
    correct: 0,
    category: "Đặc điểm kinh tế",
    explanation:
      "Trong thời kỳ quá độ, nhiều thành phần kinh tế cùng tồn tại và vận động theo định hướng xã hội chủ nghĩa."
  },
  {
    question: "Nhiệm vụ trung tâm về kinh tế trong thời kỳ quá độ là gì?",
    answers: [
      "Phát triển lực lượng sản xuất, xây dựng cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội",
      "Giảm vai trò của khoa học và công nghệ",
      "Xóa bỏ mọi hình thức sản xuất hàng hóa ngay lập tức",
      "Chỉ tập trung phân phối mà không sản xuất"
    ],
    correct: 0,
    category: "Nhiệm vụ kinh tế",
    explanation:
      "Cơ sở vật chất - kỹ thuật hiện đại là điều kiện không thể thiếu để xây dựng thành công chủ nghĩa xã hội."
  },
  {
    question: "Về chính trị, thời kỳ quá độ đòi hỏi điều gì?",
    answers: [
      "Giữ vững vai trò lãnh đạo của Đảng và tăng cường nhà nước của nhân dân lao động",
      "Thủ tiêu mọi thiết chế chính trị ngay lập tức",
      "Tách kinh tế khỏi chính trị hoàn toàn",
      "Trao quyền lực cho thiểu số đặc quyền"
    ],
    correct: 0,
    category: "Nhiệm vụ chính trị",
    explanation:
      "Quá trình chuyển tiếp cần có sự lãnh đạo chính trị thống nhất và một nhà nước đủ năng lực tổ chức xã hội."
  },
  {
    question: "Trong lĩnh vực văn hóa - xã hội, yêu cầu của thời kỳ quá độ là gì?",
    answers: [
      "Xây dựng con người mới, nền văn hóa mới và nâng cao đời sống nhân dân",
      "Phủ nhận vai trò của giáo dục",
      "Chỉ phát triển kinh tế, bỏ qua văn hóa",
      "Tách rời tiến bộ xã hội khỏi tăng trưởng"
    ],
    correct: 0,
    category: "Văn hóa - xã hội",
    explanation:
      "Xây dựng chủ nghĩa xã hội không chỉ là nhiệm vụ kinh tế mà còn là nhiệm vụ văn hóa, xã hội và con người."
  },
  {
    question: "Quan hệ giữa đổi mới và định hướng xã hội chủ nghĩa ở Việt Nam được hiểu như thế nào?",
    answers: [
      "Đổi mới là để thực hiện hiệu quả hơn mục tiêu xã hội chủ nghĩa, không phải thay đổi mục tiêu đó",
      "Đổi mới đồng nghĩa với từ bỏ định hướng xã hội chủ nghĩa",
      "Đổi mới chỉ là thay đổi hình thức tuyên truyền",
      "Đổi mới không liên quan đến phát triển lực lượng sản xuất"
    ],
    correct: 0,
    category: "Liên hệ Việt Nam",
    explanation:
      "Đổi mới ở Việt Nam là quá trình vận dụng sáng tạo nhằm xây dựng chủ nghĩa xã hội phù hợp thực tiễn."
  },
  {
    question: "Một biểu hiện của tính phức tạp trong thời kỳ quá độ là gì?",
    answers: [
      "Sự đan xen giữa cái cũ và cái mới trong mọi lĩnh vực đời sống xã hội",
      "Không còn mâu thuẫn xã hội nào",
      "Chỉ có một lực lượng xã hội duy nhất hoạt động",
      "Tất cả nhiệm vụ đều hoàn thành trong thời gian ngắn"
    ],
    correct: 0,
    category: "Tính phức tạp",
    explanation:
      "Thời kỳ quá độ luôn chứa đựng sự đấu tranh giữa xu hướng cũ và mới trong quá trình phát triển."
  },
  {
    question: "Tại sao phải phát huy dân chủ trong thời kỳ quá độ?",
    answers: [
      "Vì dân chủ là động lực huy động sức sáng tạo và sự tham gia của nhân dân vào xây dựng xã hội mới",
      "Vì dân chủ chỉ có giá trị hình thức",
      "Vì dân chủ thay thế hoàn toàn vai trò quản lý nhà nước",
      "Vì dân chủ chỉ áp dụng cho một nhóm nhỏ"
    ],
    correct: 0,
    category: "Dân chủ trong quá độ",
    explanation:
      "Phát huy dân chủ giúp biến mục tiêu xây dựng xã hội mới thành hành động tự giác của đông đảo nhân dân."
  },
  {
    question: "Kết luận đúng nhất về thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
    answers: [
      "Đó là quá trình cải biến lâu dài, toàn diện, cần bước đi phù hợp với điều kiện cụ thể của mỗi nước",
      "Đó là giai đoạn có thể bỏ qua hoàn toàn quy luật khách quan",
      "Đó là giai đoạn không cần lãnh đạo chính trị",
      "Đó là giai đoạn chỉ giải quyết vấn đề kinh tế"
    ],
    correct: 0,
    category: "Tổng kết",
    explanation:
      "Thời kỳ quá độ đòi hỏi cách tiếp cận toàn diện, khoa học và phù hợp thực tiễn."
  }
];

const stage4Questions = [
  {
    question: "Dân chủ xã hội chủ nghĩa khác với các kiểu dân chủ trước đó trước hết ở điểm nào?",
    answers: [
      "Nó bảo đảm quyền lực thực sự thuộc về nhân dân lao động",
      "Nó chỉ phục vụ cho thiểu số giàu có",
      "Nó tách rời hoàn toàn nhà nước khỏi nhân dân",
      "Nó không gắn với quyền và nghĩa vụ công dân"
    ],
    correct: 0,
    category: "Khái niệm dân chủ",
    explanation:
      "Dân chủ xã hội chủ nghĩa hướng tới việc hiện thực hóa quyền làm chủ của đại đa số nhân dân."
  },
  {
    question: "Bản chất của nhà nước xã hội chủ nghĩa là gì?",
    answers: [
      "Là nhà nước của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của giai cấp công nhân thông qua Đảng",
      "Là nhà nước trung lập đứng ngoài giai cấp",
      "Là nhà nước chỉ đại diện cho thiểu số có tài sản",
      "Là nhà nước không cần pháp luật"
    ],
    correct: 0,
    category: "Bản chất nhà nước",
    explanation:
      "Nhà nước xã hội chủ nghĩa là công cụ chính trị của nhân dân lao động trong xây dựng xã hội mới."
  },
  {
    question: "Chức năng tổ chức xây dựng của nhà nước xã hội chủ nghĩa được hiểu là gì?",
    answers: [
      "Tổ chức phát triển kinh tế, văn hóa, xã hội và quản lý đời sống xã hội theo định hướng xã hội chủ nghĩa",
      "Chỉ thực hiện chức năng trấn áp",
      "Không tham gia quản lý kinh tế",
      "Từ bỏ mọi vai trò điều tiết xã hội"
    ],
    correct: 0,
    category: "Chức năng",
    explanation:
      "Nhà nước xã hội chủ nghĩa không chỉ bảo vệ chế độ mới mà còn trực tiếp tổ chức công cuộc xây dựng xã hội mới."
  },
  {
    question: "Vì sao nói dân chủ xã hội chủ nghĩa vừa là mục tiêu vừa là động lực?",
    answers: [
      "Vì dân chủ vừa là giá trị phải đạt tới, vừa là cách thức huy động sức mạnh của nhân dân",
      "Vì dân chủ chỉ có ý nghĩa tuyên truyền",
      "Vì dân chủ không liên quan tới phát triển xã hội",
      "Vì dân chủ thay thế mọi nguyên tắc pháp quyền"
    ],
    correct: 0,
    category: "Vai trò dân chủ",
    explanation:
      "Phát huy dân chủ giúp khơi dậy tinh thần chủ động, sáng tạo và đồng thuận xã hội."
  },
  {
    question: "Nguyên tắc quan trọng trong tổ chức và hoạt động của nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là gì?",
    answers: [
      "Mọi tổ chức, cá nhân đều sống và làm việc theo Hiến pháp và pháp luật",
      "Pháp luật chỉ áp dụng cho nhân dân, không áp dụng cho cơ quan công quyền",
      "Quyền lực nhà nước không cần kiểm soát",
      "Nhà nước đứng trên Hiến pháp"
    ],
    correct: 0,
    category: "Nhà nước pháp quyền",
    explanation:
      "Nhà nước pháp quyền xã hội chủ nghĩa đòi hỏi thượng tôn Hiến pháp, pháp luật và cơ chế kiểm soát quyền lực."
  },
  {
    question: "Mối quan hệ đúng giữa dân chủ và kỷ luật trong xã hội xã hội chủ nghĩa là gì?",
    answers: [
      "Dân chủ phải đi đôi với kỷ luật, kỷ cương và trách nhiệm xã hội",
      "Càng dân chủ thì càng không cần kỷ luật",
      "Kỷ luật phủ nhận dân chủ",
      "Dân chủ chỉ là quyền mà không có nghĩa vụ"
    ],
    correct: 0,
    category: "Nguyên tắc thực hiện",
    explanation:
      "Dân chủ chân chính không tách rời trách nhiệm, pháp luật và trật tự xã hội."
  },
  {
    question: "Một biểu hiện của quyền làm chủ của nhân dân là gì?",
    answers: [
      "Tham gia quản lý nhà nước và xã hội thông qua nhiều hình thức trực tiếp và gián tiếp",
      "Chỉ tham gia khi được cho phép trong phạm vi rất hẹp",
      "Tách rời hoàn toàn khỏi hoạt động chính trị",
      "Chỉ thực hiện quyền mà không chịu trách nhiệm"
    ],
    correct: 0,
    category: "Quyền làm chủ",
    explanation:
      "Nhân dân thực hiện quyền lực thông qua bầu cử, giám sát, phản biện và tham gia quản lý các mặt của đời sống xã hội."
  },
  {
    question: "Vai trò của Đảng Cộng sản trong hệ thống chính trị xã hội chủ nghĩa là gì?",
    answers: [
      "Lãnh đạo hệ thống chính trị bảo đảm định hướng xã hội chủ nghĩa",
      "Thay thế toàn bộ nhà nước và pháp luật",
      "Đứng ngoài hệ thống chính trị",
      "Chỉ tham gia vào hoạt động kinh tế"
    ],
    correct: 0,
    category: "Vai trò lãnh đạo",
    explanation:
      "Sự lãnh đạo của Đảng là nhân tố bảo đảm cho hệ thống chính trị vận hành thống nhất theo mục tiêu xã hội chủ nghĩa."
  },
  {
    question: "Ở Việt Nam, xây dựng nhà nước pháp quyền xã hội chủ nghĩa gắn với yêu cầu nào?",
    answers: [
      "Tăng cường hiệu lực, hiệu quả quản lý, kiểm soát quyền lực và phục vụ nhân dân",
      "Giảm vai trò của pháp luật",
      "Tách nhà nước khỏi mục tiêu phục vụ nhân dân",
      "Phân tán quyền lực vô nguyên tắc"
    ],
    correct: 0,
    category: "Liên hệ Việt Nam",
    explanation:
      "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam hướng tới hiệu quả quản trị và phục vụ lợi ích của nhân dân."
  },
  {
    question: "Kết luận đúng nhất về dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa là gì?",
    answers: [
      "Chúng gắn bó chặt chẽ với nhau trong việc bảo đảm quyền làm chủ của nhân dân và tổ chức xây dựng xã hội mới",
      "Chúng tồn tại tách rời nhau",
      "Nhà nước càng mạnh thì dân chủ càng không cần thiết",
      "Dân chủ chỉ là hình thức, không liên quan đến nhà nước"
    ],
    correct: 0,
    category: "Tổng kết",
    explanation:
      "Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa là hai mặt thống nhất trong tổ chức xã hội mới."
  }
];

const stage5Questions = [
  {
    question: "Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội có đặc điểm gì?",
    answers: [
      "Đa dạng về giai cấp, tầng lớp và có sự biến đổi mạnh theo quá trình phát triển kinh tế - xã hội",
      "Hoàn toàn đồng nhất, không còn khác biệt xã hội",
      "Chỉ còn duy nhất một giai cấp",
      "Không chịu tác động của công nghiệp hóa, hiện đại hóa"
    ],
    correct: 0,
    category: "Đặc điểm chung",
    explanation:
      "Trong thời kỳ quá độ, cơ cấu xã hội - giai cấp luôn vận động và biến đổi cùng quá trình phát triển đất nước."
  },
  {
    question: "Liên minh giai cấp, tầng lớp trong thời kỳ quá độ ở Việt Nam lấy lực lượng nào làm nền tảng?",
    answers: [
      "Liên minh công nhân - nông dân - trí thức",
      "Liên minh giữa các nhà đầu cơ tài chính",
      "Liên minh chỉ giữa các doanh nhân lớn",
      "Liên minh không cần nền tảng xã hội"
    ],
    correct: 0,
    category: "Nền tảng liên minh",
    explanation:
      "Liên minh công - nông - trí thức là nền tảng chính trị - xã hội của khối đại đoàn kết toàn dân tộc."
  },
  {
    question: "Vai trò của giai cấp nông dân trong liên minh xã hội chủ nghĩa thể hiện ở đâu?",
    answers: [
      "Là lực lượng to lớn trong sản xuất và xây dựng nông thôn mới",
      "Không còn vị trí nào trong phát triển đất nước",
      "Chỉ có vai trò trong quá khứ",
      "Tách rời hoàn toàn với giai cấp công nhân"
    ],
    correct: 0,
    category: "Vai trò nông dân",
    explanation:
      "Nông dân là lực lượng đông đảo, giữ vai trò quan trọng trong phát triển nông nghiệp và ổn định xã hội."
  },
  {
    question: "Tại sao đội ngũ trí thức có vị trí ngày càng quan trọng trong thời kỳ quá độ?",
    answers: [
      "Vì tri thức, khoa học và công nghệ trở thành động lực trực tiếp của phát triển",
      "Vì trí thức thay thế hoàn toàn các lực lượng xã hội khác",
      "Vì trí thức không cần gắn với thực tiễn sản xuất",
      "Vì trí thức chỉ làm nhiệm vụ tuyên truyền"
    ],
    correct: 0,
    category: "Vai trò trí thức",
    explanation:
      "Kinh tế tri thức và chuyển đổi công nghệ làm cho đội ngũ trí thức có vai trò đặc biệt quan trọng."
  },
  {
    question: "Mục tiêu của liên minh giai cấp, tầng lớp trong thời kỳ quá độ là gì?",
    answers: [
      "Tạo đồng thuận xã hội và huy động sức mạnh tổng hợp cho xây dựng chủ nghĩa xã hội",
      "Tạo đặc quyền cho một nhóm xã hội",
      "Làm sâu sắc thêm chia rẽ lợi ích",
      "Thay thế vai trò của nhà nước"
    ],
    correct: 0,
    category: "Mục tiêu liên minh",
    explanation:
      "Liên minh xã hội nhằm thống nhất lợi ích cơ bản, tạo sức mạnh cho phát triển và ổn định chính trị."
  },
  {
    question: "Trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa, yêu cầu đặt ra với chính sách xã hội là gì?",
    answers: [
      "Kết hợp tăng trưởng kinh tế với tiến bộ và công bằng xã hội",
      "Chỉ ưu tiên tăng trưởng, bỏ qua công bằng xã hội",
      "Thực hiện bình quân tuyệt đối, không quan tâm hiệu quả",
      "Tách chính sách xã hội khỏi chính sách kinh tế"
    ],
    correct: 0,
    category: "Chính sách xã hội",
    explanation:
      "Định hướng xã hội chủ nghĩa đòi hỏi phát triển kinh tế phải đi đôi với chăm lo tiến bộ và công bằng xã hội."
  },
  {
    question: "Một trong những nguyên tắc quan trọng để củng cố khối liên minh xã hội là gì?",
    answers: [
      "Hài hòa lợi ích giữa các giai cấp, tầng lớp trong khuôn khổ lợi ích quốc gia - dân tộc",
      "Đề cao lợi ích cục bộ trên lợi ích chung",
      "Tạo đối kháng lợi ích giữa các lực lượng",
      "Xem nhẹ vai trò của đối thoại xã hội"
    ],
    correct: 0,
    category: "Nguyên tắc củng cố",
    explanation:
      "Liên minh bền vững phải dựa trên sự thống nhất lợi ích cơ bản và cơ chế điều hòa lợi ích hợp lý."
  },
  {
    question: "Vì sao nói khối đại đoàn kết toàn dân tộc có quan hệ chặt chẽ với liên minh công - nông - trí thức?",
    answers: [
      "Vì liên minh này là nền tảng cốt lõi để mở rộng đoàn kết toàn xã hội",
      "Vì hai khái niệm hoàn toàn không liên quan",
      "Vì đại đoàn kết chỉ mang tính hình thức",
      "Vì liên minh chỉ tồn tại trong phạm vi kinh tế"
    ],
    correct: 0,
    category: "Đại đoàn kết",
    explanation:
      "Liên minh công - nông - trí thức tạo cơ sở vững chắc để xây dựng khối đại đoàn kết toàn dân tộc."
  },
  {
    question: "Ở Việt Nam hiện nay, lực lượng doanh nhân được nhìn nhận như thế nào trong cơ cấu xã hội - giai cấp?",
    answers: [
      "Là một lực lượng quan trọng cần được phát huy trong phát triển kinh tế gắn với định hướng xã hội chủ nghĩa",
      "Là lực lượng không có vai trò nào",
      "Tự động đối lập với mục tiêu xã hội chủ nghĩa",
      "Không cần gắn với trách nhiệm xã hội"
    ],
    correct: 0,
    category: "Lực lượng mới",
    explanation:
      "Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, doanh nhân là lực lượng cần được phát huy đồng thời gắn với trách nhiệm xã hội."
  },
  {
    question: "Kết luận đúng nhất về cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp ở Việt Nam là gì?",
    answers: [
      "Đó là vấn đề chiến lược, phải được xử lý trên cơ sở đoàn kết, hài hòa lợi ích và định hướng xã hội chủ nghĩa",
      "Đó là vấn đề chỉ mang tính lý thuyết",
      "Đó là vấn đề không liên quan đến phát triển đất nước",
      "Đó là vấn đề chỉ của riêng giai cấp công nhân"
    ],
    correct: 0,
    category: "Tổng kết",
    explanation:
      "Cơ cấu xã hội - giai cấp và liên minh xã hội là nội dung chiến lược trong toàn bộ tiến trình xây dựng chủ nghĩa xã hội."
  }
];

const stage6Questions = [
  {
    question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, vấn đề dân tộc cần được giải quyết theo nguyên tắc nào?",
    answers: [
      "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
      "Đồng hóa cưỡng bức giữa các dân tộc",
      "Đề cao dân tộc đa số và xem nhẹ dân tộc thiểu số",
      "Tách riêng từng dân tộc khỏi cộng đồng quốc gia"
    ],
    correct: 0,
    category: "Vấn đề dân tộc",
    explanation:
      "Giải quyết vấn đề dân tộc trong chủ nghĩa xã hội phải bảo đảm bình đẳng, đoàn kết và phát triển hài hòa."
  },
  {
    question: "Quan điểm đúng của chủ nghĩa Mác - Lênin về tôn giáo là gì?",
    answers: [
      "Tôn trọng quyền tự do tín ngưỡng, tôn giáo và không tín ngưỡng của nhân dân",
      "Cấm tuyệt đối mọi hoạt động tín ngưỡng",
      "Xem mọi người có tôn giáo là đối lập với xã hội",
      "Đồng nhất tôn giáo với hoạt động chính trị phản động"
    ],
    correct: 0,
    category: "Vấn đề tôn giáo",
    explanation:
      "Chủ nghĩa Mác - Lênin và đường lối của Đảng phân biệt giữa nhu cầu tín ngưỡng chính đáng với việc lợi dụng tôn giáo."
  },
  {
    question: "Tại sao phải phân biệt hoạt động tôn giáo bình thường với việc lợi dụng tôn giáo?",
    answers: [
      "Để vừa bảo đảm quyền tự do tín ngưỡng, vừa giữ vững an ninh và trật tự xã hội",
      "Vì mọi hoạt động tôn giáo đều giống nhau",
      "Vì nhà nước không cần quản lý lĩnh vực này",
      "Vì quyền tự do tín ngưỡng không liên quan pháp luật"
    ],
    correct: 0,
    category: "Nguyên tắc xử lý",
    explanation:
      "Sự phân biệt này giúp thực hiện đúng chính sách tôn trọng tự do tín ngưỡng đồng thời ngăn ngừa hành vi lợi dụng."
  },
  {
    question: "Gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội được xây dựng theo những giá trị cơ bản nào?",
    answers: [
      "No ấm, tiến bộ, hạnh phúc, văn minh",
      "Gia trưởng, áp đặt, bất bình đẳng",
      "Tách rời khỏi trách nhiệm xã hội",
      "Đặt quyền lực của một cá nhân lên trên mọi thành viên"
    ],
    correct: 0,
    category: "Vấn đề gia đình",
    explanation:
      "Gia đình mới trong chủ nghĩa xã hội gắn với bình đẳng, tiến bộ và sự phát triển toàn diện của con người."
  },
  {
    question: "Một trong những nguyên tắc quan trọng để xây dựng gia đình tiến bộ là gì?",
    answers: [
      "Bình đẳng giới và tôn trọng quyền của các thành viên",
      "Duy trì định kiến giới và bạo lực gia đình",
      "Xem nhẹ vai trò giáo dục trong gia đình",
      "Tách gia đình khỏi cộng đồng xã hội"
    ],
    correct: 0,
    category: "Bình đẳng giới",
    explanation:
      "Gia đình tiến bộ phải dựa trên bình đẳng, yêu thương, trách nhiệm và sự tôn trọng lẫn nhau."
  },
  {
    question: "Ý nghĩa của chính sách dân tộc đúng đắn ở Việt Nam là gì?",
    answers: [
      "Củng cố khối đại đoàn kết toàn dân tộc và tạo điều kiện phát triển bền vững",
      "Làm gia tăng chia rẽ giữa các cộng đồng",
      "Chỉ có ý nghĩa văn hóa, không có ý nghĩa chính trị",
      "Không liên quan đến ổn định đất nước"
    ],
    correct: 0,
    category: "Liên hệ Việt Nam",
    explanation:
      "Chính sách dân tộc đúng đắn góp phần giữ vững ổn định chính trị, xã hội và phát huy sức mạnh toàn dân."
  },
  {
    question: "Đối với tín ngưỡng, tôn giáo ở Việt Nam, quan điểm phù hợp là gì?",
    answers: [
      "Tôn trọng và bảo đảm quyền tự do tín ngưỡng, đồng thời đấu tranh với việc lợi dụng tôn giáo",
      "Đồng nhất mọi hoạt động tôn giáo với hành vi vi phạm pháp luật",
      "Xem nhẹ nhu cầu tinh thần của nhân dân",
      "Tách hoàn toàn tôn giáo khỏi đời sống cộng đồng"
    ],
    correct: 0,
    category: "Chính sách tôn giáo",
    explanation:
      "Chính sách đúng đắn phải hài hòa giữa quyền tự do tín ngưỡng với yêu cầu bảo vệ lợi ích chung."
  },
  {
    question: "Gia đình có vai trò nào trong sự phát triển xã hội?",
    answers: [
      "Là tế bào của xã hội, môi trường đầu tiên hình thành nhân cách con người",
      "Chỉ là đơn vị kinh tế đơn thuần",
      "Không có vai trò trong giáo dục thế hệ trẻ",
      "Không liên quan đến ổn định xã hội"
    ],
    correct: 0,
    category: "Vai trò gia đình",
    explanation:
      "Gia đình vừa là môi trường nuôi dưỡng con người, vừa là nền tảng của ổn định và phát triển xã hội."
  },
  {
    question: "Trong xử lý các vấn đề dân tộc, tôn giáo và gia đình, yêu cầu phương pháp luận nổi bật là gì?",
    answers: [
      "Tôn trọng đặc điểm cụ thể, kết hợp lợi ích cá nhân, cộng đồng và quốc gia - dân tộc",
      "Áp dụng máy móc một mô hình cho mọi trường hợp",
      "Chỉ nhìn nhận dưới góc độ hành chính đơn thuần",
      "Tách các vấn đề này khỏi phát triển kinh tế - xã hội"
    ],
    correct: 0,
    category: "Phương pháp tiếp cận",
    explanation:
      "Cần tiếp cận toàn diện, lịch sử - cụ thể và nhân văn khi giải quyết các vấn đề xã hội nhạy cảm này."
  },
  {
    question: "Kết luận đúng nhất về dân tộc, tôn giáo và gia đình trong thời kỳ quá độ là gì?",
    answers: [
      "Đây là những vấn đề xã hội lớn, phải giải quyết hài hòa trên cơ sở đoàn kết, pháp luật và giá trị nhân văn",
      "Đây là những vấn đề thứ yếu, có thể bỏ qua",
      "Đây là những vấn đề chỉ thuộc phạm vi đời tư",
      "Đây là những vấn đề không liên quan đến mục tiêu xã hội chủ nghĩa"
    ],
    correct: 0,
    category: "Tổng kết",
    explanation:
      "Giải quyết đúng đắn các vấn đề dân tộc, tôn giáo và gia đình góp phần củng cố nền tảng xã hội của chế độ mới."
  }
];

export const lessonStages = [
  {
    id: 1,
    title: "Chương 1 - Nhập môn chủ nghĩa xã hội khoa học",
    objective:
      "Nắm khái niệm, đối tượng nghiên cứu, cơ sở hình thành và ý nghĩa phương pháp luận của chủ nghĩa xã hội khoa học.",
    landmark: "Cổng khởi nguyên",
    theme: "mountain-cave",
    backgroundImage: getAssetPath("images/stage-1-bg-v2.png"),
    questions: stage1Questions
  },
  {
    id: 2,
    title: "Chương 2 - Sứ mệnh lịch sử của giai cấp công nhân",
    objective:
      "Hiểu cơ sở khách quan, điều kiện chủ quan và nội dung cơ bản trong sứ mệnh lịch sử của giai cấp công nhân.",
    landmark: "Nhà người dẫn đường",
    theme: "forest-lodge",
    backgroundImage: getAssetPath("images/stage-2-bg-v2.png"),
    questions: stage2Questions
  },
  {
    id: 3,
    title: "Chương 3 - Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội",
    objective:
      "Nắm đặc điểm, tính tất yếu và những nhiệm vụ cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội.",
    landmark: "Đền chuyển hóa",
    theme: "temple-pass",
    backgroundImage: getAssetPath("images/stage-3-bg-v2.png"),
    questions: stage3Questions
  },
  {
    id: 4,
    title: "Chương 4 - Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa",
    objective:
      "Hiểu bản chất, chức năng và mối quan hệ giữa dân chủ xã hội chủ nghĩa với nhà nước xã hội chủ nghĩa.",
    landmark: "Tháp công lý",
    theme: "justice-tower",
    backgroundImage: getAssetPath("images/stage-4-bg-v2.png"),
    questions: stage4Questions
  },
  {
    id: 5,
    title: "Chương 5 - Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp",
    objective:
      "Nắm vai trò của cơ cấu xã hội - giai cấp và liên minh công nhân, nông dân, trí thức trong thời kỳ quá độ.",
    landmark: "Làng liên minh",
    theme: "alliance-village",
    backgroundImage: getAssetPath("images/stage-5-bg-v2.png"),
    questions: stage5Questions
  },
  {
    id: 6,
    title: "Chương 6 - Dân tộc, tôn giáo và gia đình trong thời kỳ quá độ",
    objective:
      "Hiểu cách tiếp cận và giải quyết các vấn đề dân tộc, tôn giáo, gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội.",
    landmark: "Điện hòa hợp",
    theme: "harmony-hall",
    backgroundImage: getAssetPath("images/stage-6-bg-v2.png"),
    questions: stage6Questions
  }
];

export const mazeLayouts = {
  1: createMazeLayout(1, [
    "Bệ đá quan sát",
    "Cửa hang khởi nguyên",
    "Cầu dây mâu thuẫn",
    "Lối mòn quy luật",
    "Bậc thang nhận thức",
    "Phế tích phương pháp",
    "Cổng thực tiễn",
    "Dốc chuyển hóa",
    "Đài quan sát hệ thống",
    "Đền tổng kết",
    "Lối ra ánh sáng"
  ]),
  2: createMazeLayout(2, [
    "Chòi khởi động",
    "Lều công hội",
    "Đường rèn kỷ luật",
    "Đài đoàn kết",
    "Cổng chính đảng",
    "Bến liên minh",
    "Thềm quyền lực",
    "Xưởng hiện đại",
    "Nhịp đổi mới",
    "Đền tổng lực",
    "Lối ra sứ mệnh"
  ]),
  3: createMazeLayout(3, [
    "Bậc cửa quá độ",
    "Lối mở chuyển tiếp",
    "Cầu nhiều thành phần",
    "Đài cơ sở vật chất",
    "Cổng định hướng",
    "Sân dân chủ",
    "Dốc cải biến",
    "Bậc phát triển",
    "Vòm liên hệ Việt Nam",
    "Đền hoàn thiện",
    "Lối ra xã hội mới"
  ]),
  4: createMazeLayout(4, [
    "Trạm quyền dân",
    "Cổng dân chủ",
    "Lối pháp quyền",
    "Thềm hiến pháp",
    "Tháp tổ chức",
    "Phòng kiểm soát",
    "Bến đồng thuận",
    "Đài nhân dân",
    "Cầu lãnh đạo",
    "Đền phục vụ",
    "Lối ra công lý"
  ]),
  5: createMazeLayout(5, [
    "Cổng cộng đồng",
    "Lối cơ cấu",
    "Bến công nhân",
    "Vườn nông dân",
    "Thềm trí thức",
    "Cổng doanh nhân",
    "Dốc lợi ích",
    "Đài đại đoàn kết",
    "Cầu chính sách",
    "Đền liên minh",
    "Lối ra đồng thuận"
  ]),
  6: createMazeLayout(6, [
    "Sân khởi hòa",
    "Cổng dân tộc",
    "Lối bình đẳng",
    "Đài tín ngưỡng",
    "Cầu pháp lý",
    "Vòm gia đình",
    "Dốc nhân văn",
    "Đền đoàn kết",
    "Bậc văn minh",
    "Điện tổng hợp",
    "Lối ra hòa hợp"
  ])
};

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
    "question": "Chủ nghĩa xã hội khoa học nghiên cứu chủ yếu nội dung nào dưới đây?",
    "answers": [
      "Sự phát triển tâm lý cá nhân và quy luật hình thành tính cách con người trong đời sống hiện đại",
      "Các học thuyết đạo đức cổ đại cùng hệ thống quy tắc ứng xử xã hội của các quốc gia phương Đông",
      "Sự biến động phức tạp của giá cả thị trường và cơ chế vận hành nền kinh tế tự do toàn cầu",
      "Quy luật, con đường và điều kiện hiện thực hóa chủ nghĩa xã hội và chủ nghĩa cộng sản."
    ],
    "correct": 3,
    "category": "Khởi nguyên môn học",
    "explanation": "Chủ nghĩa xã hội khoa học tập trung làm rõ cơ sở khách quan, lực lượng xã hội và con đường lịch sử để xây dựng xã hội mới."
  },
  {
    "question": "Điểm khác biệt cốt lõi giữa chủ nghĩa xã hội khoa học và chủ nghĩa xã hội không tưởng là gì?",
    "answers": [
      "Chủ nghĩa xã hội khoa học chỉ xây dựng hệ thống khẩu hiệu mang tính giáo điều, thiếu tính thực tế",
      "Chủ nghĩa xã hội khoa học có cơ sở lý luận và thực tiễn, gắn với quy luật vận động của xã hội.",
      "Chủ nghĩa xã hội khoa học chỉ chú trọng vào ước vọng đạo đức tốt đẹp của các hiền triết phương Tây",
      "Chủ nghĩa xã hội khoa học phủ nhận hoàn toàn vai trò của lịch sử và sự vận động tự nhiên của loài người"
    ],
    "correct": 1,
    "category": "Bản chất khoa học",
    "explanation": "Chủ nghĩa xã hội khoa học dựa trên nền tảng khoa học về lịch sử và thực tiễn đấu tranh xã hội, không dừng ở mong muốn tốt đẹp."
  },
  {
    "question": "Một cơ sở lý luận trực tiếp của chủ nghĩa xã hội khoa học là gì?",
    "answers": [
      "Chủ nghĩa kinh nghiệm thuần túy dựa trên các quan sát sinh học",
      "Thuyết địa tâm cổ đại cùng quan niệm triết học tự nhiên Hy Lạp",
      "Chủ nghĩa duy vật lịch sử kết hợp với học thuyết giá trị thặng dư.",
      "Thần học thời kỳ Trung cổ với các giáo lý tôn giáo chính thống"
    ],
    "correct": 2,
    "category": "Cơ sở lý luận",
    "explanation": "Chủ nghĩa duy vật lịch sử giúp giải thích sự phát triển xã hội bằng những quy luật khách quan."
  },
  {
    "question": "Đối với chủ nghĩa xã hội khoa học, đối tượng nghiên cứu được hiểu đúng nhất là gì?",
    "answers": [
      "Quá trình tiến hóa tâm sinh lý và cơ chế phản xạ có điều kiện của giống loài người",
      "Các cuộc cách mạng tư sản nổi bật diễn ra vào thế kỷ XVII - XVIII ở khu vực Tây Âu",
      "Những quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa.",
      "Các mô hình quản lý nhân sự tiên tiến của các tập đoàn đa quốc gia thời đại số"
    ],
    "correct": 2,
    "category": "Đối tượng nghiên cứu",
    "explanation": "Môn học hướng tới các quy luật và điều kiện lịch sử - xã hội làm nảy sinh và hiện thực hóa xã hội xã hội chủ nghĩa."
  },
  {
    "question": "Sự ra đời của chủ nghĩa xã hội khoa học gắn trực tiếp với phát hiện lý luận nào của C. Mác và Ph. Ăngghen?",
    "answers": [
      "Học thuyết về sự phân chia ba nhánh quyền lực độc lập trong bộ máy nhà nước",
      "Học thuyết về các giai đoạn phát triển tâm lý học hành vi của trẻ em tuổi dậy thì",
      "Học thuyết về đấu tranh giai cấp và sứ mệnh lịch sử của giai cấp công nhân.",
      "Học thuyết về quản trị tài chính doanh nghiệp và kiểm soát dòng vốn đầu tư"
    ],
    "correct": 2,
    "category": "Nguồn gốc hình thành",
    "explanation": "Phát hiện vai trò lịch sử của giai cấp công nhân đã chuyển chủ nghĩa xã hội từ không tưởng thành khoa học."
  },
  {
    "question": "Cơ sở thực tiễn quan trọng thúc đẩy sự hình thành chủ nghĩa xã hội khoa học là gì?",
    "answers": [
      "Sự thịnh vượng kinh tế của hệ thống phong kiến phương Đông thế kỷ XIV đến XVI",
      "Sự suy tàn của chế độ chiếm hữu nô lệ ở châu Âu thời kỳ cổ đại Hy Lạp - La Mã",
      "Sự giao thoa văn hóa nghệ thuật giữa các quốc gia châu Á và các quốc gia châu Phi",
      "Sự phát triển của phong trào công nhân và những mâu thuẫn của chủ nghĩa tư bản."
    ],
    "correct": 3,
    "category": "Cơ sở thực tiễn",
    "explanation": "Phong trào công nhân trưởng thành cùng với mâu thuẫn nội tại của chủ nghĩa tư bản là nền thực tiễn để môn học ra đời."
  },
  {
    "question": "Trong hệ thống chủ nghĩa Mác - Lênin, chủ nghĩa xã hội khoa học giữ vai trò nổi bật nào?",
    "answers": [
      "Là bộ phận trực tiếp định hướng cho hoạt động chính trị - xã hội nhằm cải tạo hiện thực.",
      "Minh họa cho lịch sử phát triển của các hệ tư tưởng nghệ thuật thời kỳ phục hưng châu Âu",
      "Định giá các tài sản tài chính công và phân bổ ngân sách cho các cơ quan hành chính trung ương",
      "Hệ thống hóa các học thuyết triết học cổ đại để giải thích thế giới tự nhiên bên ngoài"
    ],
    "correct": 0,
    "category": "Vị trí môn học",
    "explanation": "Bộ phận này hướng trực tiếp tới con đường hành động cải biến xã hội."
  },
  {
    "question": "Ý nghĩa phương pháp luận nổi bật của việc học chương mở đầu này là gì?",
    "answers": [
      "Giúp trang bị các công cụ toán học tối ưu để giải quyết các vấn đề kinh tế vĩ mô phức tạp",
      "Giúp người học có cách nhìn hệ thống, khoa học về tiến trình vận động và biến đổi xã hội.",
      "Giúp ghi nhớ toàn bộ hệ thống tên tuổi các triết gia lỗi lạc trong lịch sử phương Tây",
      "Cung cấp kỹ năng giao tiếp cơ bản và nghệ thuật thuyết phục khách hàng trong kinh doanh"
    ],
    "correct": 1,
    "category": "Ý nghĩa phương pháp luận",
    "explanation": "Chương 1 giúp xác định được cách tiếp cận khoa học, toàn diện và lịch sử - cụ thể đối với các vấn đề xã hội."
  },
  {
    "question": "Đối với sinh viên, học chủ nghĩa xã hội khoa học trước hết giúp hình thành điều gì?",
    "answers": [
      "Thế giới quan và bản lĩnh chính trị đúng đắn khi nhìn nhận các vấn đề xã hội phức tạp.",
      "Năng lực thay thế hoàn toàn các kiến thức chuyên ngành kỹ thuật và khoa học tự nhiên",
      "Khả năng ghi nhớ máy móc các khẩu hiệu tuyên truyền chính trị mà không cần tư duy phản biện",
      "Kỹ năng lập trình hệ thống máy tính và quản trị dữ liệu lớn cho các doanh nghiệp công nghệ"
    ],
    "correct": 0,
    "category": "Ý nghĩa đối với người học",
    "explanation": "Môn học giúp sinh viên xây dựng thế giới quan khoa học và thái độ chính trị đúng đắn."
  },
  {
    "question": "Kết luận phù hợp nhất sau khi hoàn thành Chương 1 là gì?",
    "answers": [
      "Chủ nghĩa xã hội khoa học chỉ có giá trị lịch sử và không còn ý nghĩa gì trong thời đại ngày nay",
      "Chủ nghĩa xã hội khoa học thực chất chỉ là một hệ thống lý thuyết không tưởng khó áp dụng",
      "Chủ nghĩa xã hội khoa học là môn học vừa có cơ sở khoa học vừa gắn chặt với mục tiêu cải tạo xã hội hiện thực.",
      "Chủ nghĩa xã hội khoa học tập trung giải quyết các bài toán về công nghệ thông tin và trí tuệ nhân tạo"
    ],
    "correct": 2,
    "category": "Tổng kết chương",
    "explanation": "Bản chất của môn học nằm ở tính khoa học, tính cách mạng và khả năng định hướng thực tiễn."
  }
];

const stage2Questions = [
  {
    "question": "Sứ mệnh lịch sử của giai cấp công nhân được hiểu khái quát là gì?",
    "answers": [
      "Lãnh đạo đấu tranh xóa bỏ chủ nghĩa tư bản, xây dựng xã hội mới xã hội chủ nghĩa.",
      "Rút lui hoàn toàn khỏi các hoạt động chính trị để đảm bảo tính trung lập khách quan",
      "Thay thế toàn bộ giai cấp khác trong xã hội bằng một hệ thống đặc quyền thống trị mới",
      "Chỉ tham gia biểu tình đòi tăng lương tối thiểu tại các nhà máy nhỏ ở địa phương"
    ],
    "correct": 0,
    "category": "Khái niệm",
    "explanation": "Sứ mệnh lịch sử của giai cấp công nhân gắn với việc cải biến toàn bộ xã hội theo định hướng xã hội chủ nghĩa."
  },
  {
    "question": "Cơ sở khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "answers": [
      "Sự ưu ái và bảo trợ pháp lý đặc biệt của nhà nước quân chủ chuyên chế thời kỳ đầu",
      "Vị trí của họ trong nền đại công nghiệp và quan hệ với lực lượng sản xuất hiện đại.",
      "Địa vị trung gian hòa giải xung đột giữa giai cấp quý tộc và giai cấp tiểu tư sản tự do",
      "Khả năng tích lũy và sở hữu lượng tư bản tài chính lớn nhất trong các tầng lớp xã hội"
    ],
    "correct": 1,
    "category": "Cơ sở khách quan",
    "explanation": "Chính địa vị kinh tế - xã hội của giai cấp công nhân trong nền sản xuất hiện đại quy định vai trò lịch sử của họ."
  },
  {
    "question": "Đặc điểm nào sau đây gắn trực tiếp với bản chất cách mạng của giai cấp công nhân?",
    "answers": [
      "Sự thờ ơ đối với các hoạt động tổ chức liên đoàn và đấu tranh chính trị",
      "Lối sống biệt lập, phân tán và không có sự kết nối với cộng đồng",
      "Lao động tập thể, có kỷ luật và gắn với nền sản xuất hiện đại.",
      "Sở hữu nguồn tài nguyên thiên nhiên và đất đai rộng lớn ở nông thôn"
    ],
    "correct": 2,
    "category": "Đặc điểm",
    "explanation": "Quá trình lao động công nghiệp hiện đại rèn luyện giai cấp công nhân về tổ chức, kỷ luật và tinh thần tập thể."
  },
  {
    "question": "Điều kiện chủ quan quan trọng hàng đầu để giai cấp công nhân thực hiện sứ mệnh lịch sử là gì?",
    "answers": [
      "Tách rời hoàn toàn mục tiêu đấu tranh giai cấp khỏi lợi ích chung của toàn dân tộc",
      "Sự thành lập và dẫn dắt của một chính đảng cộng sản có lý luận tiên phong.",
      "Việc sở hữu các đặc quyền tài chính vượt trội so với các tầng lớp xã hội khác",
      "Sự từ chối liên minh hoặc hợp tác với bất kỳ lực lượng lao động nào khác"
    ],
    "correct": 1,
    "category": "Điều kiện chủ quan",
    "explanation": "Đảng Cộng sản là nhân tố bảo đảm cho sự thống nhất về lý luận, tổ chức và đường lối hành động."
  },
  {
    "question": "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân thể hiện ở điểm nào?",
    "answers": [
      "Chỉ tập trung vào việc gia tăng tiêu dùng cá nhân trước mắt mà không cần phát triển sản xuất",
      "Duy trì nguyên vẹn chế độ tư hữu tư bản chủ nghĩa về mọi tư liệu sản xuất chính",
      "Xây dựng quan hệ sản xuất mới phù hợp với tính chất xã hội hóa của lực lượng sản xuất.",
      "Phủ nhận hoàn toàn vai trò của các phát kiến khoa học - công nghệ trong nền công nghiệp"
    ],
    "correct": 2,
    "category": "Nội dung kinh tế",
    "explanation": "Nội dung kinh tế gắn với việc tổ chức lại nền sản xuất trên cơ sở công hữu và quản lý xã hội hóa."
  },
  {
    "question": "Nội dung chính trị trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "answers": [
      "Chỉ đảm nhận vai trò cố vấn chuyên môn cho giai cấp tư sản đang nắm giữ quyền lực",
      "Tách biệt hoàn toàn quyền lực của cơ quan lập pháp và hành pháp khỏi quần chúng nhân dân",
      "Giành chính quyền và sử dụng quyền lực nhà nước để cải tạo xã hội cũ, xây dựng xã hội mới.",
      "Tránh né hoàn toàn việc tham gia vào các hoạt động tranh chấp quyền lực nhà nước"
    ],
    "correct": 2,
    "category": "Nội dung chính trị",
    "explanation": "Nội dung chính trị thể hiện ở việc thiết lập quyền lực của nhân dân lao động dưới sự lãnh đạo của giai cấp công nhân."
  },
  {
    "question": "Vì sao nói liên minh giữa giai cấp công nhân với nông dân và trí thức là cần thiết?",
    "answers": [
      "Vì liên minh này sẽ thay thế hoàn toàn vai trò định hướng chính trị của Đảng Cộng sản",
      "Vì giai cấp công nhân không có vai trò lãnh đạo độc lập trong tiến trình cách mạng",
      "Vì đó là cơ sở xã hội rộng lớn để thực hiện nhiệm vụ cách mạng.",
      "Vì chỉ có lực lượng nông nghiệp mới quyết định được toàn bộ xu thế phát triển lịch sử"
    ],
    "correct": 2,
    "category": "Liên minh xã hội",
    "explanation": "Liên minh công - nông - trí thức tạo nền tảng chính trị - xã hội cho việc xây dựng xã hội mới."
  },
  {
    "question": "Trong điều kiện hiện nay, giai cấp công nhân hiện đại có biến đổi nào nổi bật?",
    "answers": [
      "Trình độ tri thức, công nghệ và tính quốc tế hóa trong lao động ngày càng tăng.",
      "Không còn gắn kết với các ngành công nghiệp chế tạo và dịch vụ tự động hóa hiện đại",
      "Chỉ tập trung hoạt động trong các hợp tác xã nông nghiệp thô sơ truyền thống",
      "Sự giảm sút nghiêm trọng về số lượng và dần biến mất khỏi cơ cấu kinh tế quốc dân"
    ],
    "correct": 0,
    "category": "Bối cảnh hiện đại",
    "explanation": "Sự phát triển của khoa học - công nghệ làm cho công nhân hiện đại có hàm lượng tri thức ngày càng cao."
  },
  {
    "question": "Ở Việt Nam, giai cấp công nhân có vai trò gì trong sự nghiệp đổi mới?",
    "answers": [
      "Là lực lượng đi đầu trong công nghiệp hóa, hiện đại hóa và xây dựng chủ nghĩa xã hội.",
      "Tách biệt hoàn toàn khỏi liên minh chiến lược với nông dân và tầng lớp trí thức nước nhà",
      "Đặt lợi ích riêng của giai cấp mình lên trên lợi ích sinh tồn của cả quốc gia dân tộc",
      "Chỉ đóng vai trò hỗ trợ phụ thuộc về mặt kinh tế, không có vị thế chính trị"
    ],
    "correct": 0,
    "category": "Liên hệ Việt Nam",
    "explanation": "Trong thời kỳ đổi mới, giai cấp công nhân tiếp tục là lực lượng nòng cốt trong phát triển lực lượng sản xuất hiện đại."
  },
  {
    "question": "Kết luận phù hợp nhất về sứ mệnh lịch sử của giai cấp công nhân là gì?",
    "answers": [
      "Đó là một nhiệm vụ mang tính lịch sử nhất thời, chỉ có ý nghĩa vào thế kỷ XIX ở châu Âu",
      "Đó là quá trình vừa khách quan vừa cần điều kiện tổ chức, chính trị và liên minh xã hội phù hợp.",
      "Đó là một khẩu hiệu lý thuyết thuần túy, không có khả năng ứng dụng vào thực tế đấu tranh",
      "Đó là sứ mệnh riêng biệt chỉ do một nhóm nhỏ các lãnh tụ chính trị tự định đoạt và thực hiện"
    ],
    "correct": 1,
    "category": "Tổng kết",
    "explanation": "Sứ mệnh lịch sử của giai cấp công nhân là một quá trình hiện thực, cần cả cơ sở khách quan lẫn điều kiện chủ quan."
  }
];

const stage3Questions = [
  {
    "question": "Khái niệm thời kỳ quá độ lên chủ nghĩa xã hội được hiểu đúng là gì?",
    "answers": [
      "Thời kỳ chuyển biến sâu sắc từ xã hội cũ sang xã hội mới với nhiều hình thức kinh tế - xã hội đan xen.",
      "Khoảng thời gian tự do tuyệt đối, không cần bất kỳ sự quản lý hành chính nào từ phía nhà nước",
      "Giai đoạn mà các mục tiêu kinh tế xã hội chủ nghĩa đã được hoàn thiện triệt để trên cả nước",
      "Giai đoạn khôi phục lại hoàn toàn các quan hệ sản xuất phong kiến và bang hội phong kiến cũ"
    ],
    "correct": 0,
    "category": "Khái niệm",
    "explanation": "Thời kỳ quá độ là một quá trình cải biến toàn diện, lâu dài và phức tạp từ xã hội cũ sang xã hội mới."
  },
  {
    "question": "Vì sao thời kỳ quá độ lên chủ nghĩa xã hội là tất yếu?",
    "answers": [
      "Vì các quan hệ kinh tế mới tự động nảy sinh mà không cần đến hoạt động cải tạo xã hội có ý thức",
      "Vì chủ nghĩa xã hội không cần xây dựng cơ sở hạ tầng vật chất kỹ thuật tiên tiến làm nền tảng",
      "Vì không thể ngay lập tức xóa bỏ mọi dấu vết của xã hội cũ và xây dựng hoàn chỉnh xã hội mới.",
      "Vì đây chỉ là một giai đoạn thủ tục hành chính ngắn ngủi mang tính hình thức thuần túy"
    ],
    "correct": 2,
    "category": "Tính tất yếu",
    "explanation": "Sự khác biệt sâu sắc giữa xã hội cũ và xã hội mới đòi hỏi một giai đoạn chuyển tiếp lịch sử."
  },
  {
    "question": "Đặc điểm kinh tế nổi bật của thời kỳ quá độ là gì?",
    "answers": [
      "Tồn tại nhiều thành phần kinh tế trong một cơ cấu kinh tế quá độ.",
      "Sự vận hành tự phát của thị trường tự do mà hoàn toàn không có sự quản lý từ nhà nước",
      "Sự thống trị độc tôn của một thành phần kinh tế nhà nước ngay từ ngày đầu tiên",
      "Sự loại bỏ hoàn toàn nhu cầu gia tăng năng suất và phát triển lực lượng sản xuất mới"
    ],
    "correct": 0,
    "category": "Đặc điểm kinh tế",
    "explanation": "Trong thời kỳ quá độ, nhiều thành phần kinh tế cùng tồn tại và vận động theo định hướng xã hội chủ nghĩa."
  },
  {
    "question": "Nhiệm vụ trung tâm về kinh tế trong thời kỳ quá độ là gì?",
    "answers": [
      "Chỉ tập trung vào công tác phân phối công bằng mà không cần quan tâm đến hoạt động sản xuất",
      "Hạn chế tối đa vai trò của các phát minh khoa học công nghệ mới vào sản xuất hàng hóa",
      "Phát triển lực lượng sản xuất, xây dựng cơ sở vật chất - kỹ thuật của chủ nghĩa xã hội.",
      "Xóa bỏ triệt để tất cả các hình thức trao đổi thương mại và tiền tệ ngay lập tức"
    ],
    "correct": 2,
    "category": "Nhiệm vụ kinh tế",
    "explanation": "Cơ sở vật chất - kỹ thuật hiện đại là điều kiện không thể thiếu để xây dựng thành công chủ nghĩa xã hội."
  },
  {
    "question": "Về chính trị, thời kỳ quá độ đòi hỏi điều gì?",
    "answers": [
      "Giữ vững vai trò lãnh đạo của Đảng và tăng cường nhà nước của nhân dân lao động.",
      "Tách rời hoàn toàn các quyết sách chính trị ra khỏi mục tiêu phát triển kinh tế quốc dân",
      "Giải tán toàn bộ hệ thống cơ quan pháp luật và tòa án trên cả nước ngay lập tức",
      "Chuyển giao quyền lực quản lý đất nước cho một bộ phận thiểu số tinh hoa có tài sản"
    ],
    "correct": 0,
    "category": "Nhiệm vụ chính trị",
    "explanation": "Quá trình chuyển tiếp cần có sự lãnh đạo chính trị thống nhất và một nhà nước đủ năng lực tổ chức xã hội."
  },
  {
    "question": "Trong lĩnh vực văn hóa - xã hội, yêu cầu của thời kỳ quá độ là gì?",
    "answers": [
      "Hạn chế các hoạt động giáo dục toàn dân để tập trung ngân sách cho xuất khẩu",
      "Xây dựng con người mới, nền văn hóa mới và nâng cao đời sống nhân dân.",
      "Tách biệt hoàn toàn các chương trình an sinh xã hội ra khỏi tốc độ tăng trưởng kinh tế",
      "Chỉ ưu tiên phát triển hạ tầng giao thông, bỏ qua các giá trị văn hóa tinh thần"
    ],
    "correct": 1,
    "category": "Văn hóa - xã hội",
    "explanation": "Xây dựng chủ nghĩa xã hội không chỉ là nhiệm vụ kinh tế mà còn là nhiệm vụ văn hóa, xã hội và con người."
  },
  {
    "question": "Quan hệ giữa đổi mới và định hướng xã hội chủ nghĩa ở Việt Nam được hiểu như thế nào?",
    "answers": [
      "Đổi mới kinh tế độc lập hoàn toàn và không tác động đến sự phát triển lực lượng sản xuất",
      "Đổi mới là để thực hiện hiệu quả hơn mục tiêu xã hội chủ nghĩa, không phải thay đổi mục tiêu đó.",
      "Đổi mới chỉ đơn giản là việc thay đổi các khẩu hiệu tuyên truyền trong hệ thống chính trị",
      "Đổi mới đồng nghĩa với việc từ bỏ từng bước lý tưởng và mục tiêu xây dựng chủ nghĩa xã hội"
    ],
    "correct": 1,
    "category": "Liên hệ Việt Nam",
    "explanation": "Đổi mới ở Việt Nam là quá trình vận dụng sáng tạo nhằm xây dựng chủ nghĩa xã hội phù hợp thực tiễn."
  },
  {
    "question": "Một biểu hiện của tính phức tạp trong thời kỳ quá độ là gì?",
    "answers": [
      "Việc hoàn thành nhanh chóng toàn bộ các nhiệm vụ lịch sử trong vài ba năm ngắn ngủi",
      "Sự đan xen giữa cái cũ và cái mới trong mọi lĩnh vực đời sống xã hội.",
      "Sự vận hành của một lực lượng xã hội thống nhất duy nhất không có đối trọng",
      "Sự biến mất hoàn toàn của mọi mâu thuẫn xã hội và xung đột lợi ích nhóm"
    ],
    "correct": 1,
    "category": "Tính phức tạp",
    "explanation": "Thời kỳ quá độ luôn chứa đựng sự đấu tranh giữa xu hướng cũ và mới trong quá trình phát triển."
  },
  {
    "question": "Tại sao phải phát huy dân chủ trong thời kỳ quá độ?",
    "answers": [
      "Vì dân chủ đóng vai trò trang trí pháp lý hình thức nhằm tạo dựng uy tín ngoại giao quốc tế",
      "Vì dân chủ chỉ nên áp dụng giới hạn trong nội bộ một nhóm nhỏ các nhà quản lý vĩ mô chính sách",
      "Vì dân chủ sẽ thay thế toàn bộ hoạt động điều hành và giám sát chuyên môn của các cơ quan nhà nước",
      "Vì dân chủ là động lực huy động sức sáng tạo và sự tham gia của nhân dân vào xây dựng xã hội mới."
    ],
    "correct": 3,
    "category": "Dân chủ trong quá độ",
    "explanation": "Phát huy dân chủ giúp biến mục tiêu xây dựng xã hội mới thành hành động tự giác của đông đảo nhân dân."
  },
  {
    "question": "Kết luận đúng nhất về thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
    "answers": [
      "Đó là thời kỳ đấu tranh vũ trang liên tục mà hoàn toàn không cần đến năng lực quản lý hành chính nhà nước",
      "Đó là một giai đoạn ngắn hạn có thể bỏ qua toàn bộ các quy luật khách quan về sự phát triển kinh tế",
      "Đó là giai đoạn tập trung giải quyết các khủng hoảng môi trường toàn cầu mà không cần phát triển xã hội",
      "Đó là quá trình cải biến lâu dài, toàn diện, cần bước đi phù hợp với điều kiện cụ thể của mỗi nước."
    ],
    "correct": 3,
    "category": "Tổng kết",
    "explanation": "Thời kỳ quá độ đòi hỏi cách tiếp cận toàn diện, khoa học và phù hợp thực tiễn."
  }
];

const stage4Questions = [
  {
    "question": "Dân chủ xã hội chủ nghĩa khác với các kiểu dân chủ trước đó trước hết ở điểm nào?",
    "answers": [
      "Nó được xây dựng để bảo vệ đặc quyền kinh tế của nhóm thiểu số giàu có",
      "Nó thực hiện việc tách rời hoàn toàn bộ máy chính quyền khỏi đời sống nhân dân",
      "Nó bảo đảm quyền lực thực sự thuộc về nhân dân lao động.",
      "Nó phủ nhận mọi quyền lợi đi đôi với trách nhiệm và nghĩa vụ của công dân"
    ],
    "correct": 2,
    "category": "Khái niệm dân chủ",
    "explanation": "Dân chủ xã hội chủ nghĩa hướng tới việc hiện thực hóa quyền làm chủ của đại đa số nhân dân."
  },
  {
    "question": "Bản chất của nhà nước xã hội chủ nghĩa là gì?",
    "answers": [
      "Là nhà nước của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của giai cấp công nhân thông qua Đảng.",
      "Là nhà nước chuyên chính đại diện độc quyền cho tầng lớp quý tộc mới có địa vị kinh tế",
      "Là một hệ thống điều hành xã hội lỏng lẻo và không cần dựa trên các quy định pháp luật",
      "Là một tổ chức trung lập tuyệt đối đứng ngoài mọi xung đột lợi ích của các giai cấp"
    ],
    "correct": 0,
    "category": "Bản chất nhà nước",
    "explanation": "Nhà nước xã hội chủ nghĩa là công cụ chính trị của nhân dân lao động trong xây dựng xã hội mới."
  },
  {
    "question": "Chức năng tổ chức xây dựng của nhà nước xã hội chủ nghĩa được hiểu là gì?",
    "answers": [
      "Chỉ tập trung thực hiện các hoạt động trấn áp bạo lực đối với các thế lực chống đối chế độ",
      "Đứng ngoài các quyết sách vĩ mô và hoàn toàn không can thiệp vào các hoạt động sản xuất kinh doanh",
      "Từ bỏ vai trò quản lý điều tiết thị trường và để nền kinh tế tự vận hành theo quy luật tự nhiên",
      "Tổ chức phát triển kinh tế, văn hóa, xã hội và quản lý đời sống xã hội theo định hướng xã hội chủ nghĩa."
    ],
    "correct": 3,
    "category": "Chức năng",
    "explanation": "Nhà nước xã hội chủ nghĩa không chỉ bảo vệ chế độ mới mà còn trực tiếp tổ chức công cuộc xây dựng xã hội mới."
  },
  {
    "question": "Vì sao nói dân chủ xã hội chủ nghĩa vừa là mục tiêu vừa là động lực?",
    "answers": [
      "Vì dân chủ sẽ thay thế toàn bộ và phủ nhận các nguyên tắc tối cao của hệ thống pháp luật nhà nước",
      "Vì dân chủ chỉ đóng vai trò như một khẩu hiệu phục vụ cho các chiến dịch quảng bá đối ngoại",
      "Vì dân chủ vừa là giá trị phải đạt tới, vừa là cách thức huy động sức mạnh của nhân dân.",
      "Vì dân chủ không có mối liên kết hữu cơ nào đối với sự phát triển toàn diện của nền kinh tế nước nhà"
    ],
    "correct": 2,
    "category": "Vai trò dân chủ",
    "explanation": "Phát huy dân chủ giúp khơi dậy tinh thần chủ động, sáng tạo và đồng thuận xã hội."
  },
  {
    "question": "Nguyên tắc quan trọng trong tổ chức và hoạt động của nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là gì?",
    "answers": [
      "Mọi tổ chức, cá nhân đều sống và làm việc theo Hiến pháp và pháp luật.",
      "Nhà nước có quyền đứng trên mọi quy định của Hiến pháp khi xử lý các khủng hoảng xã hội",
      "Hệ thống luật pháp chỉ áp dụng đối với người dân bình thường, không áp dụng cho cán bộ",
      "Quyền lực của các cơ quan nhà nước được vận hành tự do mà không cần cơ chế giám sát chéo"
    ],
    "correct": 0,
    "category": "Nhà nước pháp quyền",
    "explanation": "Nhà nước pháp quyền xã hội chủ nghĩa đòi hỏi thượng tôn Hiến pháp, pháp luật và cơ chế kiểm soát quyền lực."
  },
  {
    "question": "Mối quan hệ đúng giữa dân chủ và kỷ luật trong xã hội xã hội chủ nghĩa là gì?",
    "answers": [
      "Càng thực hiện dân chủ rộng rãi thì càng phải nới lỏng các quy tắc kỷ luật hành chính",
      "Dân chủ phải đi đôi với kỷ luật, kỷ cương và trách nhiệm xã hội.",
      "Kỷ luật nghiêm ngặt luôn luôn mâu thuẫn và triệt tiêu mọi biểu hiện của dân chủ tự do",
      "Dân chủ chỉ đơn thuần là việc đòi hỏi các quyền lợi cá nhân mà không cần gắn với nghĩa vụ"
    ],
    "correct": 1,
    "category": "Nguyên tắc thực hiện",
    "explanation": "Dân chủ chân chính không tách rời trách nhiệm, pháp luật và trật tự xã hội."
  },
  {
    "question": "Một biểu hiện của quyền làm chủ của nhân dân là gì?",
    "answers": [
      "Tham gia quản lý nhà nước và xã hội thông qua nhiều hình thức trực tiếp và gián tiếp.",
      "Tự nguyện rút lui hoàn toàn khỏi mọi hoạt động tranh luận chính trị và đóng góp chính sách công",
      "Chỉ được phép tham gia ý kiến trong một số phạm vi rất hạn chế do cơ quan cấp trên phê duyệt",
      "Hưởng thụ các dịch vụ công cộng mà hoàn toàn không phải thực hiện các trách nhiệm công dân kèm theo"
    ],
    "correct": 0,
    "category": "Quyền làm chủ",
    "explanation": "Nhân dân thực hiện quyền lực thông qua bầu cử, giám sát, phản biện và tham gia quản lý các mặt của đời sống xã hội."
  },
  {
    "question": "Vai trò của Đảng Cộng sản trong hệ thống chính trị xã hội chủ nghĩa là gì?",
    "answers": [
      "Lãnh đạo hệ thống chính trị bảo đảm định hướng xã hội chủ nghĩa.",
      "Thay thế toàn bộ hệ thống các cơ quan quản lý hành chính của nhà nước và tòa án",
      "Đóng vai trò độc lập bên ngoài hệ thống chính trị và không can dự vào pháp luật quốc gia",
      "Chỉ tập trung chỉ đạo các hoạt động kinh tế thuần túy ở các tổng công ty lớn của nhà nước"
    ],
    "correct": 0,
    "category": "Vai trò lãnh đạo",
    "explanation": "Sự lãnh đạo của Đảng là nhân tố bảo đảm cho hệ thống chính trị vận hành thống nhất theo mục tiêu xã hội chủ nghĩa."
  },
  {
    "question": "Ở Việt Nam, xây dựng nhà nước pháp quyền xã hội chủ nghĩa gắn với yêu cầu nào?",
    "answers": [
      "Tăng cường hiệu lực, hiệu quả quản lý, kiểm soát quyền lực và phục vụ nhân dân.",
      "Tách rời hoạt động hành chính của cơ quan công quyền khỏi lợi ích đời sống của người dân",
      "Cắt giảm tối đa số lượng văn bản quy phạm pháp luật để nới lỏng quản lý hành chính",
      "Phân cấp phân quyền một cách tự do, thiếu đồng bộ giữa trung ương và các địa phương"
    ],
    "correct": 0,
    "category": "Liên hệ Việt Nam",
    "explanation": "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam hướng tới hiệu quả quản trị và phục vụ lợi ích của nhân dân."
  },
  {
    "question": "Kết luận đúng nhất về dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa là gì?",
    "answers": [
      "Dân chủ chỉ mang ý nghĩa lý thuyết phục vụ tuyên truyền và không có tác động gì tới hiệu lực của nhà nước",
      "Chúng gắn bó chặt chẽ với nhau trong việc bảo đảm quyền làm chủ của nhân dân và tổ chức xây dựng xã hội mới.",
      "Chúng là hai phạm trù độc lập hoàn toàn và thường xuyên nảy sinh các xung đột về mặt lợi ích quản lý",
      "Nhà nước càng tập trung quyền lực mạnh mẽ thì quyền dân chủ của người dân càng bị thu hẹp tự động"
    ],
    "correct": 1,
    "category": "Tổng kết",
    "explanation": "Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa là hai mặt thống nhất trong tổ chức xã hội mới."
  }
];

const stage5Questions = [
  {
    "question": "Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội có đặc điểm gì?",
    "answers": [
      "Hoàn toàn mang tính đồng nhất tuyệt đối, không còn bất kỳ sự khác biệt nào về lợi ích xã hội",
      "Giữ nguyên trạng thái tĩnh lặng, không chịu ảnh hưởng từ các chương trình hiện đại hóa đất nước",
      "Đa dạng về giai cấp, tầng lớp và có sự biến đổi mạnh theo quá trình phát triển kinh tế - xã hội.",
      "Chỉ tồn tại duy nhất một giai cấp công nhân độc tôn, các giai tầng khác đã hoàn toàn biến mất"
    ],
    "correct": 2,
    "category": "Đặc điểm chung",
    "explanation": "Trong thời kỳ quá độ, cơ cấu xã hội - giai cấp luôn vận động và biến đổi cùng quá trình phát triển đất nước."
  },
  {
    "question": "Liên minh giai cấp, tầng lớp trong thời kỳ quá độ ở Việt Nam lấy lực lượng nào làm nền tảng?",
    "answers": [
      "Liên minh độc quyền giữa các doanh nghiệp lớn và giới chủ sử dụng lao động tư nhân",
      "Sự liên kết tự phát giữa các hội nhóm nghề nghiệp tự do không cần định hướng chính trị",
      "Liên minh giữa các tập đoàn đầu cơ bất động sản và giới tài chính ngân hàng quốc tế",
      "Liên minh công nhân - nông dân - trí thức."
    ],
    "correct": 3,
    "category": "Nền tảng liên minh",
    "explanation": "Liên minh công - nông - trí thức là nền tảng chính trị - xã hội của khối đại đoàn kết toàn dân tộc."
  },
  {
    "question": "Vai trò của giai cấp nông dân trong liên minh xã hội chủ nghĩa thể hiện ở đâu?",
    "answers": [
      "Là lực lượng to lớn trong sản xuất và xây dựng nông thôn mới.",
      "Hoạt động biệt lập và hoàn toàn tách rời khỏi các định hướng của giai cấp công nhân dẫn đường",
      "Chỉ có vai trò đóng góp trong các cuộc kháng chiến lịch sử của dân tộc ở thế kỷ trước",
      "Không còn giữ bất kỳ vị trí chiến lược nào trong các kế hoạch phát triển kinh tế thời đại số"
    ],
    "correct": 0,
    "category": "Vai trò nông dân",
    "explanation": "Nông dân là lực lượng đông đảo, giữ vai trò quan trọng trong phát triển nông nghiệp và ổn định xã hội."
  },
  {
    "question": "Tại sao đội ngũ trí thức có vị trí ngày càng quan trọng trong thời kỳ quá độ?",
    "answers": [
      "Vì đội ngũ trí thức chủ yếu thực hiện nhiệm vụ truyền đạt thông tin một chiều trong hệ thống giáo dục",
      "Vì trí thức có khả năng nghiên cứu các lý thuyết thuần túy mà không cần gắn với thực tiễn sản xuất",
      "Vì tầng lớp trí thức sẽ thay thế hoàn toàn vai trò của tất cả các lực lượng sản xuất vật chất khác",
      "Vì tri thức, khoa học và công nghệ trở thành động lực trực tiếp của phát triển."
    ],
    "correct": 3,
    "category": "Vai trò trí thức",
    "explanation": "Kinh tế tri thức và chuyển đổi công nghệ làm cho đội ngũ trí thức có vai trò đặc biệt quan trọng."
  },
  {
    "question": "Mục tiêu của liên minh giai cấp, tầng lớp trong thời kỳ quá độ là gì?",
    "answers": [
      "Xây dựng một hệ thống tự quản lỏng lẻo nhằm thay thế hoàn toàn vai trò quản lý của các cơ quan nhà nước",
      "Thiết lập vị thế đặc quyền kinh tế lâu dài cho một nhóm lợi ích thiểu số trong bộ máy quản lý",
      "Làm sâu sắc thêm sự phân hóa giàu nghèo và chia rẽ sâu sắc về mặt lợi ích giữa các tầng lớp",
      "Tạo đồng thuận xã hội và huy động sức mạnh tổng hợp cho xây dựng chủ nghĩa xã hội."
    ],
    "correct": 3,
    "category": "Mục tiêu liên minh",
    "explanation": "Liên minh xã hội nhằm thống nhất lợi ích cơ bản, tạo sức mạnh cho phát triển và ổn định chính trị."
  },
  {
    "question": "Trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa, yêu cầu đặt ra với chính sách xã hội là gì?",
    "answers": [
      "Chỉ tập trung thúc đẩy chỉ số GDP vĩ mô và tạm gác lại các vấn đề về công bằng xã hội",
      "Áp dụng nguyên tắc chia đều của cải tuyệt đối mà hoàn toàn không chú trọng đến năng suất lao động",
      "Kết hợp tăng trưởng kinh tế với tiến bộ và công bằng xã hội.",
      "Tách biệt hoàn toàn các chương trình phúc lợi xã hội khỏi chiến lược tăng trưởng kinh tế hàng năm"
    ],
    "correct": 2,
    "category": "Chính sách xã hội",
    "explanation": "Định hướng xã hội chủ nghĩa đòi hỏi phát triển kinh tế phải đi đôi với chăm lo tiến bộ và công bằng xã hội."
  },
  {
    "question": "Một trong những nguyên tắc quan trọng để củng cố khối liên minh xã hội là gì?",
    "answers": [
      "Hài hòa lợi ích giữa các giai cấp, tầng lớp trong khuôn khổ lợi ích quốc gia - dân tộc.",
      "Đề cao tối đa lợi ích cục bộ của từng ngành nghề độc lập lên trên lợi ích chung của xã hội",
      "Xem nhẹ vai trò của các diễn đàn đối thoại xã hội giữa người lao động và đại diện chính quyền",
      "Tạo dựng các rào cản pháp lý nhằm làm gia tăng sự cạnh tranh gay gắt giữa các thành phần lao động"
    ],
    "correct": 0,
    "category": "Nguyên tắc củng cố",
    "explanation": "Liên minh bền vững phải dựa trên sự thống nhất lợi ích cơ bản và cơ chế điều hòa lợi ích hợp lý."
  },
  {
    "question": "Vì sao nói khối đại đoàn kết toàn dân tộc có quan hệ chặt chẽ với liên minh công - nông - trí thức?",
    "answers": [
      "Vì đây là hai khái niệm hoàn toàn độc lập và không có sự giao thoa về mặt chính trị - xã hội",
      "Vì đại đoàn kết dân tộc chỉ là một khẩu hiệu ngoại giao mang tính chất hình thức ngắn hạn",
      "Vì khối liên minh này chỉ giới hạn trong phạm vi các hợp tác trao đổi hàng hóa nông sản công nghiệp",
      "Vì liên minh này là nền tảng cốt lõi để mở rộng đoàn kết toàn xã hội."
    ],
    "correct": 3,
    "category": "Đại đoàn kết",
    "explanation": "Liên minh công - nông - trí thức tạo cơ sở vững chắc để xây dựng khối đại đoàn kết toàn dân tộc."
  },
  {
    "question": "Ở Việt Nam hiện nay, lực lượng doanh nhân được nhìn nhận như thế nào trong cơ cấu xã hội - giai cấp?",
    "answers": [
      "Là lực lượng tự động đối lập và cản trở việc thực hiện các mục tiêu xây dựng chủ nghĩa xã hội nước nhà",
      "Là thành phần kinh tế tự do tuyệt đối và không cần gắn liền với bất kỳ trách nhiệm xã hội nào đối với dân",
      "Là nhóm người chỉ quan tâm đến lợi nhuận cá nhân và hoàn toàn không có vai trò gì trong nền kinh tế mới",
      "Là một lực lượng quan trọng cần được phát huy trong phát triển kinh tế gắn với định hướng xã hội chủ nghĩa."
    ],
    "correct": 3,
    "category": "Lực lượng mới",
    "explanation": "Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa, doanh nhân là lực lượng cần được phát huy đồng thời gắn với trách nhiệm xã hội."
  },
  {
    "question": "Kết luận đúng nhất về cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp ở Việt Nam là gì?",
    "answers": [
      "Đó là vấn đề chiến lược, phải được xử lý trên cơ sở đoàn kết, hài hòa lợi ích và định hướng xã hội chủ nghĩa.",
      "Đó là bài toán riêng biệt thuộc trách nhiệm điều hành của hệ thống các cơ quan quản lý lao động trung ương",
      "Đó là vấn đề tự điều chỉnh của thị trường việc làm tự do mà không cần đến sự định hướng vĩ mô từ nhà nước",
      "Đó là nội dung lý thuyết hàn lâm thuần túy, không có giá trị định hướng trong các chiến lược phát triển thực tế"
    ],
    "correct": 0,
    "category": "Tổng kết",
    "explanation": "Cơ cấu xã hội - giai cấp và liên minh xã hội là nội dung chiến lược trong toàn bộ tiến trình xây dựng chủ nghĩa xã hội."
  }
];

const stage6Questions = [
  {
    "question": "Trong thời kỳ quá độ lên chủ nghĩa xã hội, vấn đề dân tộc cần được giải quyết theo nguyên tắc nào?",
    "answers": [
      "Đề cao tuyệt đối vị trí của dân tộc đa số và giảm bớt quyền lợi dân tộc khác",
      "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
      "Thực hiện việc đồng hóa cưỡng chế giữa các cộng đồng dân tộc thiểu số",
      "Tách biệt hoàn toàn các khu vực sinh sống của mỗi dân tộc để tránh xung đột xảy ra"
    ],
    "correct": 1,
    "category": "Vấn đề dân tộc",
    "explanation": "Giải quyết vấn đề dân tộc trong chủ nghĩa xã hội phải bảo đảm bình đẳng, đoàn kết và phát triển hài hòa."
  },
  {
    "question": "Quan điểm đúng của chủ nghĩa Mác - Lênin về tôn giáo là gì?",
    "answers": [
      "Đồng nhất mọi hình thức tổ chức tôn giáo với các hoạt động chính trị phản động chống phá",
      "Xem tất cả các tín đồ tôn giáo là thế lực đối lập với sự phát triển của xã hội mới",
      "Tôn trọng quyền tự do tín ngưỡng, tôn giáo và không tín ngưỡng của nhân dân.",
      "Cấm đoán triệt để tất cả các hình thức sinh hoạt văn hóa tâm linh và thờ cúng tổ tiên"
    ],
    "correct": 2,
    "category": "Vấn đề tôn giáo",
    "explanation": "Chủ nghĩa Mác - Lênin và đường lối của Đảng phân biệt giữa nhu cầu tín ngưỡng chính đáng với việc lợi dụng tôn giáo."
  },
  {
    "question": "Tại sao phải phân biệt hoạt động tôn giáo bình thường với việc lợi dụng tôn giáo?",
    "answers": [
      "Vì quyền tự do tín ngưỡng của người dân là tuyệt đối và nằm ngoài phạm vi điều chỉnh pháp luật",
      "Vì tất cả các hoạt động tôn giáo đều có cùng mục đích và bản chất hành vi như nhau",
      "Để vừa bảo đảm quyền tự do tín ngưỡng, vừa giữ vững an ninh và trật tự xã hội.",
      "Vì cơ quan quản lý nhà nước không cần can thiệp hành chính vào lĩnh vực nhạy cảm này"
    ],
    "correct": 2,
    "category": "Nguyên tắc xử lý",
    "explanation": "Sự phân biệt này giúp thực hiện đúng chính sách tôn trọng tự do tín ngưỡng đồng thời ngăn ngừa hành vi lợi dụng."
  },
  {
    "question": "Gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội được xây dựng theo những giá trị cơ bản nào?",
    "answers": [
      "Duy trì tuyệt đối chế độ gia trưởng, quyền lực áp đặt từ phía người chồng",
      "Đặt lợi ích kinh tế của chủ hộ lên trên sự phát triển của các thành viên khác",
      "Tự do cá nhân tối đa, tách rời khỏi mọi trách nhiệm đạo đức và xã hội chung",
      "No ấm, tiến bộ, hạnh phúc, văn minh."
    ],
    "correct": 3,
    "category": "Vấn đề gia đình",
    "explanation": "Gia đình mới trong chủ nghĩa xã hội gắn với bình đẳng, tiến bộ và sự phát triển toàn diện của con người."
  },
  {
    "question": "Một trong những nguyên tắc quan trọng để xây dựng gia đình tiến bộ là gì?",
    "answers": [
      "Cách ly các hoạt động sinh hoạt gia đình ra khỏi đời sống văn hóa chung của khu phố",
      "Bình đẳng giới và tôn trọng quyền của các thành viên.",
      "Xem nhẹ vai trò giáo dục đạo đức truyền thống của ông bà cha mẹ đối với thế hệ trẻ",
      "Duy trì các định kiến phân biệt giới tính cũ và chấp nhận bạo lực gia đình ở mức nhỏ"
    ],
    "correct": 1,
    "category": "Bình đẳng giới",
    "explanation": "Gia đình tiến bộ phải dựa trên bình đẳng, yêu thương, trách nhiệm và sự tôn trọng lẫn nhau."
  },
  {
    "question": "Ý nghĩa của chính sách dân tộc đúng đắn ở Việt Nam là gì?",
    "answers": [
      "Chỉ mang ý nghĩa bảo tồn văn hóa nghệ thuật trình diễn mà không liên quan tới quốc phòng",
      "Hạn chế các hoạt động giao thương kinh tế giữa vùng cao và vùng đồng bằng ven biển",
      "Củng cố khối đại đoàn kết toàn dân tộc và tạo điều kiện phát triển bền vững.",
      "Thúc đẩy sự cạnh tranh kinh tế cục bộ giữa các tỉnh có đồng bào thiểu số sinh sống"
    ],
    "correct": 2,
    "category": "Liên hệ Việt Nam",
    "explanation": "Chính sách dân tộc đúng đắn góp phần giữ vững ổn định chính trị, xã hội và phát huy sức mạnh toàn dân."
  },
  {
    "question": "Đối với tín ngưỡng, tôn giáo ở Việt Nam, quan điểm phù hợp là gì?",
    "answers": [
      "Đồng nhất toàn bộ các nghi lễ sinh hoạt tôn giáo với các hành vi vi phạm trật tự công cộng",
      "Xem nhẹ nhu cầu sinh hoạt tinh thần chính đáng của đồng bào có đạo ở các địa phương",
      "Tách biệt hoàn toàn cộng đồng giáo dân ra khỏi các chương trình phát triển nông thôn mới",
      "Tôn trọng và bảo đảm quyền tự do tín ngưỡng, đồng thời đấu tranh với việc lợi dụng tôn giáo."
    ],
    "correct": 3,
    "category": "Chính sách tôn giáo",
    "explanation": "Chính sách đúng đắn phải hài hòa giữa quyền tự do tín ngưỡng với yêu cầu bảo vệ lợi ích chung."
  },
  {
    "question": "Gia đình có vai trò nào trong sự phát triển xã hội?",
    "answers": [
      "Là một thiết chế cổ xưa không còn phù hợp với xu thế phát triển xã hội công nghệ",
      "Chỉ đóng vai trò là một đơn vị sản xuất và tiêu dùng tài chính độc lập khép kín",
      "Là tế bào của xã hội, môi trường đầu tiên hình thành nhân cách con người.",
      "Không tham gia vào việc truyền đạt các giá trị văn hóa và giáo dục thế hệ trẻ thơ"
    ],
    "correct": 2,
    "category": "Vai trò gia đình",
    "explanation": "Gia đình vừa là môi trường nuôi dưỡng con người, vừa là nền tảng của ổn định và phát triển xã hội."
  },
  {
    "question": "Trong xử lý các vấn đề dân tộc, tôn giáo và gia đình, yêu cầu phương pháp luận nổi bật là gì?",
    "answers": [
      "Cô lập các vấn đề nhạy cảm này ra khỏi tiến trình phát triển kinh tế xã hội chung cả nước",
      "Chỉ nhìn nhận và xử lý các xung đột dưới góc độ mệnh lệnh hành chính từ cấp trên",
      "Tôn trọng đặc điểm cụ thể, kết hợp lợi ích cá nhân, cộng đồng và quốc gia - dân tộc.",
      "Áp dụng rập khuôn máy móc một mô hình hành chính duy nhất cho mọi vùng miền đất nước"
    ],
    "correct": 2,
    "category": "Phương pháp tiếp cận",
    "explanation": "Cần tiếp cận toàn diện, lịch sử - cụ thể và nhân văn khi giải quyết các vấn đề xã hội nhạy cảm này."
  },
  {
    "question": "Kết luận đúng nhất về dân tộc, tôn giáo và gia đình trong thời kỳ quá độ là gì?",
    "answers": [
      "Đây là các vấn đề thuộc phạm vi tín ngưỡng riêng biệt không chịu ảnh hưởng từ hệ thống pháp luật",
      "Đây là những vấn đề thứ yếu mang tính cá nhân và có thể bỏ qua trong các chiến lược phát triển",
      "Đây là những nội dung không có mối liên kết hữu cơ nào đối với mục tiêu xây dựng xã hội mới",
      "Đây là những vấn đề xã hội lớn, phải giải quyết hài hòa trên cơ sở đoàn kết, pháp luật và giá trị nhân văn."
    ],
    "correct": 3,
    "category": "Tổng kết",
    "explanation": "Giải quyết đúng đắn các vấn đề dân tộc, tôn giáo và gia đình góp phần củng cố nền tảng xã hội của chế độ mới."
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

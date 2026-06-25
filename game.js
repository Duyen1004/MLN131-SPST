/* =========================================
   PLATO'S CAVE ESCAPE - STAGE EDITION
   ========================================= */

const stages = [
    {
        title: "Chương 1 - Nhập môn chủ nghĩa xã hội khoa học",
        objective: "Nắm khái niệm, đối tượng nghiên cứu và ý nghĩa của chủ nghĩa xã hội khoa học.",
        theme: "gate",
        landmark: "Cổng khởi nguyên",
        gates: [
            {
                question: "Chủ nghĩa xã hội khoa học nghiên cứu chủ yếu điều gì?",
                answers: [
                    "Quy luật, con đường và điều kiện hiện thực hóa chủ nghĩa xã hội",
                    "Chỉ nghiên cứu lịch sử triết học cổ đại",
                    "Chỉ nghiên cứu kinh tế thị trường",
                    "Chỉ nghiên cứu tâm lý xã hội"
                ],
                correct: 0,
                category: "Nhập môn",
                explanation: "Chủ nghĩa xã hội khoa học tập trung vào quy luật, lực lượng và điều kiện để chuyển biến từ chủ nghĩa tư bản lên chủ nghĩa xã hội."
            },
            {
                question: "Một trong những cơ sở lý luận trực tiếp của chủ nghĩa xã hội khoa học là gì?",
                answers: [
                    "Toán học thuần túy",
                    "Chủ nghĩa duy vật lịch sử",
                    "Thần học trung cổ",
                    "Kinh tế học vi mô hiện đại"
                ],
                correct: 1,
                category: "Nhập môn",
                explanation: "Chủ nghĩa duy vật lịch sử giúp giải thích sự vận động của xã hội và vai trò của các lực lượng xã hội trong tiến trình lịch sử."
            },
            {
                question: "Ý nghĩa của việc học chủ nghĩa xã hội khoa học đối với sinh viên là gì?",
                answers: [
                    "Giúp có thế giới quan và phương pháp luận đúng đắn về xã hội",
                    "Chỉ để ghi nhớ khái niệm",
                    "Không liên quan đến thực tiễn",
                    "Chỉ phục vụ thi cử"
                ],
                correct: 0,
                category: "Nhập môn",
                explanation: "Môn học giúp hình thành cách nhìn hệ thống về xã hội, về con người và về định hướng phát triển trong thực tiễn."
            }
        ],
        review: [
            {
                question: "Thử thách vượt ải: chủ nghĩa xã hội khoa học khác với chủ nghĩa xã hội không tưởng ở điểm nào?",
                answers: [
                    "Có cơ sở khoa học và gắn với quy luật vận động xã hội",
                    "Chỉ nói về ước mơ đạo đức",
                    "Không quan tâm đến lực lượng xã hội",
                    "Chỉ là các khẩu hiệu"
                ],
                correct: 0,
                category: "Ôn tập chương 1",
                explanation: "Điểm khác biệt cốt lõi là tính khoa học: nó dựa trên cơ sở lý luận và thực tiễn chứ không chỉ là khát vọng tốt đẹp."
            },
            {
                question: "Thử thách vượt ải: học chương 1 giúp người học đạt được điều gì trước hết?",
                answers: [
                    "Có thêm kỹ năng vẽ sơ đồ",
                    "Hiểu vị trí, đối tượng và phương pháp tiếp cận của môn học",
                    "Thay thế hoàn toàn các môn khoa học khác",
                    "Chỉ để nhớ tên học thuyết"
                ],
                correct: 1,
                category: "Ôn tập chương 1",
                explanation: "Chương mở đầu giúp định vị môn học: học cái gì, vì sao học và tiếp cận nó như thế nào."
            }
        ]
    },
    {
        title: "Chương 2 - Sứ mệnh lịch sử của giai cấp công nhân",
        objective: "Hiểu vị trí, đặc điểm và vai trò lịch sử của giai cấp công nhân trong quá trình xây dựng xã hội mới.",
        theme: "house",
        landmark: "Nhà của người dẫn đường",
        gates: [
            {
                question: "Sứ mệnh lịch sử của giai cấp công nhân gắn với nhiệm vụ cơ bản nào?",
                answers: [
                    "Xóa bỏ áp bức bóc lột, xây dựng xã hội mới",
                    "Duy trì nguyên trạng xã hội cũ",
                    "Chỉ tăng năng suất lao động cá nhân",
                    "Chỉ tham gia sản xuất vật chất"
                ],
                correct: 0,
                category: "Giai cấp công nhân",
                explanation: "Sứ mệnh lịch sử không chỉ là vai trò kinh tế mà còn là vai trò cải biến xã hội theo hướng tiến bộ."
            },
            {
                question: "Điều kiện nào góp phần quy định vai trò lịch sử của giai cấp công nhân?",
                answers: [
                    "Vị trí trong nền sản xuất công nghiệp hiện đại",
                    "Sở hữu toàn bộ tư liệu sản xuất từ đầu",
                    "Không tham gia đời sống chính trị",
                    "Tách rời với các lực lượng xã hội khác"
                ],
                correct: 0,
                category: "Giai cấp công nhân",
                explanation: "Chính vị trí trong nền đại công nghiệp hiện đại làm cho giai cấp công nhân có tính tổ chức, kỷ luật và năng lực xã hội hóa cao."
            },
            {
                question: "Để thực hiện tốt sứ mệnh lịch sử, giai cấp công nhân cần điều gì?",
                answers: [
                    "Sự lãnh đạo đúng đắn của Đảng Cộng sản",
                    "Tách biệt khỏi quần chúng nhân dân",
                    "Chỉ tập trung lợi ích cục bộ",
                    "Phủ nhận mọi liên minh xã hội"
                ],
                correct: 0,
                category: "Giai cấp công nhân",
                explanation: "Sự lãnh đạo của Đảng là nhân tố then chốt bảo đảm định hướng chính trị và tổ chức cho quá trình thực hiện sứ mệnh lịch sử."
            }
        ],
        review: [
            {
                question: "Thử thách vượt ải: vì sao giai cấp công nhân có tính cách mạng triệt để?",
                answers: [
                    "Vì lợi ích của họ gắn với việc xóa bỏ chế độ bóc lột",
                    "Vì họ đứng ngoài sản xuất",
                    "Vì họ không cần liên minh",
                    "Vì họ không chịu tác động của lịch sử"
                ],
                correct: 0,
                category: "Ôn tập chương 2",
                explanation: "Lợi ích căn bản của giai cấp công nhân thống nhất với việc cải biến tận gốc quan hệ xã hội cũ."
            },
            {
                question: "Thử thách vượt ải: liên minh của giai cấp công nhân với lực lượng nào có ý nghĩa đặc biệt?",
                answers: [
                    "Liên minh với nông dân và các tầng lớp lao động khác",
                    "Chỉ liên minh với giới đầu cơ tài chính",
                    "Không cần liên minh với ai",
                    "Chỉ liên minh ngắn hạn trong bầu cử"
                ],
                correct: 0,
                category: "Ôn tập chương 2",
                explanation: "Liên minh rộng rãi với các lực lượng lao động là cơ sở xã hội quan trọng để thực hiện mục tiêu cách mạng."
            }
        ]
    },
    {
        title: "Chương 3 - Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội",
        objective: "Nắm đặc trưng của xã hội xã hội chủ nghĩa và tính tất yếu của thời kỳ quá độ.",
        theme: "temple",
        landmark: "Đền chuyển hóa",
        gates: [
            {
                question: "Thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
                answers: [
                    "Giai đoạn chuyển biến từ xã hội cũ sang xã hội mới",
                    "Giai đoạn xã hội đứng yên hoàn toàn",
                    "Giai đoạn không còn đấu tranh xã hội",
                    "Giai đoạn chỉ thay đổi về hình thức"
                ],
                correct: 0,
                category: "Thời kỳ quá độ",
                explanation: "Đây là giai đoạn lịch sử tất yếu, trong đó tồn tại đan xen cái cũ và cái mới trên nhiều mặt của đời sống xã hội."
            },
            {
                question: "Một đặc điểm của thời kỳ quá độ là gì?",
                answers: [
                    "Tồn tại nhiều hình thức sở hữu và thành phần kinh tế",
                    "Chỉ có duy nhất một hình thức kinh tế ngay từ đầu",
                    "Không cần xây dựng nhà nước",
                    "Không có mâu thuẫn nào phát sinh"
                ],
                correct: 0,
                category: "Thời kỳ quá độ",
                explanation: "Trong thời kỳ quá độ, sự đa dạng về quan hệ sở hữu và cơ cấu kinh tế phản ánh tính chuyển tiếp phức tạp của xã hội."
            },
            {
                question: "Mục tiêu của việc xây dựng chủ nghĩa xã hội là gì?",
                answers: [
                    "Hướng tới xã hội dân giàu, nước mạnh, công bằng, dân chủ, văn minh",
                    "Chỉ tăng trưởng kinh tế bằng mọi giá",
                    "Chỉ thay đổi bộ máy hành chính",
                    "Xóa bỏ toàn bộ vai trò của pháp luật"
                ],
                correct: 0,
                category: "Chủ nghĩa xã hội",
                explanation: "Mục tiêu của chủ nghĩa xã hội mang tính toàn diện, bao gồm kinh tế, chính trị, văn hóa và con người."
            }
        ],
        review: [
            {
                question: "Thử thách vượt ải: vì sao thời kỳ quá độ không thể kết thúc trong thời gian rất ngắn?",
                answers: [
                    "Vì cần quá trình cải biến toàn diện, lâu dài và phức tạp",
                    "Vì không cần phát triển lực lượng sản xuất",
                    "Vì xã hội mới tự nhiên xuất hiện",
                    "Vì không có yếu tố kinh tế nào tác động"
                ],
                correct: 0,
                category: "Ôn tập chương 3",
                explanation: "Sự thay đổi nền tảng kinh tế, chính trị, văn hóa và con người không thể hoàn thành ngay lập tức."
            },
            {
                question: "Thử thách vượt ải: đặc trưng nào phản ánh bản chất tốt đẹp của xã hội xã hội chủ nghĩa?",
                answers: [
                    "Con người được giải phóng, phát triển toàn diện",
                    "Chỉ ưu tiên lợi ích của một nhóm nhỏ",
                    "Kinh tế tách rời xã hội",
                    "Phủ nhận dân chủ"
                ],
                correct: 0,
                category: "Ôn tập chương 3",
                explanation: "Mục tiêu cuối cùng của xã hội xã hội chủ nghĩa là giải phóng con người và tạo điều kiện cho sự phát triển toàn diện."
            }
        ]
    },
    {
        title: "Chương 4 - Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa",
        objective: "Phân biệt bản chất của dân chủ xã hội chủ nghĩa và vai trò của nhà nước xã hội chủ nghĩa.",
        theme: "tower",
        landmark: "Tháp công lý",
        gates: [
            {
                question: "Dân chủ xã hội chủ nghĩa có bản chất gì?",
                answers: [
                    "Là dân chủ của đại đa số nhân dân lao động",
                    "Chỉ dành cho một nhóm thiểu số",
                    "Không gắn với quyền làm chủ của nhân dân",
                    "Chỉ là khẩu hiệu chính trị"
                ],
                correct: 0,
                category: "Dân chủ XHCN",
                explanation: "Bản chất của dân chủ xã hội chủ nghĩa là bảo đảm quyền lực thuộc về nhân dân và phục vụ lợi ích của nhân dân."
            },
            {
                question: "Nhà nước xã hội chủ nghĩa được hiểu như thế nào?",
                answers: [
                    "Là công cụ để tổ chức xã hội và thực hiện quyền làm chủ của nhân dân",
                    "Là bộ máy đứng ngoài xã hội",
                    "Không cần pháp luật",
                    "Chỉ có chức năng trấn áp"
                ],
                correct: 0,
                category: "Nhà nước XHCN",
                explanation: "Nhà nước xã hội chủ nghĩa vừa quản lý xã hội, vừa là công cụ để nhân dân thực hiện quyền lực của mình."
            },
            {
                question: "Muốn phát huy dân chủ xã hội chủ nghĩa cần điều gì?",
                answers: [
                    "Kết hợp quyền và trách nhiệm công dân với kỷ cương, pháp luật",
                    "Phủ nhận vai trò quản lý của nhà nước",
                    "Tách dân chủ khỏi pháp luật",
                    "Chỉ dựa vào ý chí chủ quan"
                ],
                correct: 0,
                category: "Dân chủ XHCN",
                explanation: "Dân chủ muốn phát huy hiệu quả phải gắn với kỷ cương, pháp luật và trách nhiệm xã hội."
            }
        ],
        review: [
            {
                question: "Thử thách vượt ải: dân chủ xã hội chủ nghĩa khác dân chủ hình thức ở điểm nào?",
                answers: [
                    "Gắn với quyền làm chủ thực chất của nhân dân trong đời sống xã hội",
                    "Chỉ tồn tại trên văn bản",
                    "Không liên quan đến kinh tế và xã hội",
                    "Chỉ phục vụ bộ máy hành chính"
                ],
                correct: 0,
                category: "Ôn tập chương 4",
                explanation: "Dân chủ xã hội chủ nghĩa hướng tới bảo đảm quyền làm chủ thực tế chứ không chỉ dừng ở hình thức."
            },
            {
                question: "Thử thách vượt ải: vì sao nhà nước xã hội chủ nghĩa phải quản lý bằng pháp luật?",
                answers: [
                    "Để bảo đảm kỷ cương, công bằng và hiệu lực quản lý xã hội",
                    "Để giảm vai trò của nhân dân",
                    "Để thay thế hoàn toàn dân chủ",
                    "Để tách nhà nước khỏi xã hội"
                ],
                correct: 0,
                category: "Ôn tập chương 4",
                explanation: "Pháp luật là công cụ quan trọng để tổ chức xã hội, bảo đảm quyền và lợi ích hợp pháp của công dân."
            }
        ]
    },
    {
        title: "Chương 5 - Cơ cấu xã hội, giai cấp và liên minh giai cấp",
        objective: "Hiểu cơ cấu xã hội trong thời kỳ quá độ và vai trò của liên minh các giai cấp, tầng lớp.",
        theme: "village",
        landmark: "Làng liên minh",
        gates: [
            {
                question: "Trong thời kỳ quá độ, cơ cấu xã hội - giai cấp có xu hướng như thế nào?",
                answers: [
                    "Vận động, biến đổi cùng với sự phát triển kinh tế - xã hội",
                    "Đứng yên và không đổi",
                    "Chỉ còn một giai cấp duy nhất ngay lập tức",
                    "Không chịu tác động của chính sách"
                ],
                correct: 0,
                category: "Cơ cấu xã hội",
                explanation: "Cơ cấu xã hội - giai cấp luôn biến đổi theo sự phát triển của lực lượng sản xuất, quan hệ sản xuất và chính sách xã hội."
            },
            {
                question: "Liên minh giai cấp, tầng lớp trong xây dựng chủ nghĩa xã hội nhằm mục đích gì?",
                answers: [
                    "Tạo nền tảng xã hội rộng lớn cho sự phát triển đất nước",
                    "Làm sâu sắc thêm đối kháng không cần thiết",
                    "Loại bỏ mọi hình thức hợp tác",
                    "Chỉ phục vụ lợi ích cục bộ"
                ],
                correct: 0,
                category: "Liên minh giai cấp",
                explanation: "Liên minh giữa các lực lượng xã hội có vai trò tập hợp sức mạnh chung, ổn định và phát triển xã hội."
            },
            {
                question: "Liên minh công nhân - nông dân - trí thức có ý nghĩa gì?",
                answers: [
                    "Là nền tảng chính trị - xã hội quan trọng trong xây dựng chủ nghĩa xã hội",
                    "Chỉ là liên minh mang tính hình thức",
                    "Không liên quan đến phát triển đất nước",
                    "Chỉ tồn tại trong khẩu hiệu"
                ],
                correct: 0,
                category: "Liên minh công - nông - trí",
                explanation: "Đây là liên minh cơ bản nhằm phát huy sức mạnh của các lực lượng chủ yếu trong xã hội."
            }
        ],
        review: [
            {
                question: "Thử thách vượt ải: vì sao cần nhìn nhận cơ cấu xã hội - giai cấp một cách động?",
                answers: [
                    "Vì nó luôn biến đổi theo phát triển kinh tế, nghề nghiệp và chính sách",
                    "Vì xã hội không có quy luật nào",
                    "Vì các giai cấp không có quan hệ với nhau",
                    "Vì chỉ cá nhân mới quan trọng"
                ],
                correct: 0,
                category: "Ôn tập chương 5",
                explanation: "Nhìn nhận động giúp thấy được xu hướng biến đổi của các giai cấp, tầng lớp và vai trò của chính sách xã hội."
            },
            {
                question: "Thử thách vượt ải: yếu tố nào giúp liên minh giai cấp, tầng lớp bền vững?",
                answers: [
                    "Hài hòa lợi ích và hướng tới mục tiêu phát triển chung",
                    "Chỉ dựa trên mệnh lệnh hành chính",
                    "Bỏ qua nhu cầu của các lực lượng",
                    "Tách rời nhiệm vụ kinh tế với xã hội"
                ],
                correct: 0,
                category: "Ôn tập chương 5",
                explanation: "Liên minh chỉ vững chắc khi lợi ích được gắn kết và các lực lượng cùng hướng tới mục tiêu chung."
            }
        ]
    },
    {
        title: "Chương 6 - Vấn đề dân tộc, tôn giáo và gia đình trong thời kỳ quá độ",
        objective: "Nắm quan điểm của chủ nghĩa xã hội khoa học về dân tộc, tôn giáo và gia đình trong xã hội mới.",
        theme: "sanctuary",
        landmark: "Điện hòa hợp",
        gates: [
            {
                question: "Quan điểm đúng về vấn đề dân tộc trong thời kỳ quá độ là gì?",
                answers: [
                    "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
                    "Đồng hóa cưỡng bức mọi dân tộc",
                    "Ưu tiên tuyệt đối một dân tộc duy nhất",
                    "Tách phát triển dân tộc khỏi phát triển đất nước"
                ],
                correct: 0,
                category: "Vấn đề dân tộc",
                explanation: "Quan điểm nhất quán là bình đẳng, đoàn kết và tạo điều kiện để các dân tộc cùng phát triển."
            },
            {
                question: "Đối với tôn giáo, cách tiếp cận phù hợp trong xã hội là gì?",
                answers: [
                    "Tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng theo pháp luật",
                    "Phủ nhận hoàn toàn nhu cầu tín ngưỡng của người dân",
                    "Đồng nhất tôn giáo với mọi hiện tượng tiêu cực",
                    "Tách tôn giáo khỏi quản lý nhà nước bằng pháp luật"
                ],
                correct: 0,
                category: "Vấn đề tôn giáo",
                explanation: "Nhà nước tôn trọng quyền tự do tín ngưỡng, đồng thời quản lý xã hội bằng pháp luật để bảo đảm ổn định và phát triển."
            },
            {
                question: "Gia đình trong thời kỳ quá độ cần được xây dựng theo định hướng nào?",
                answers: [
                    "Tiến bộ, hạnh phúc, bình đẳng và văn minh",
                    "Giữ nguyên mọi hủ tục cũ",
                    "Tách gia đình khỏi giáo dục con người",
                    "Xem nhẹ vai trò của phụ nữ"
                ],
                correct: 0,
                category: "Vấn đề gia đình",
                explanation: "Gia đình là tế bào của xã hội nên cần được xây dựng theo các giá trị tiến bộ, bình đẳng và nhân văn."
            }
        ],
        review: [
            {
                question: "Thử thách vượt ải: điểm chung trong cách giải quyết vấn đề dân tộc và tôn giáo là gì?",
                answers: [
                    "Tôn trọng quyền chính đáng của con người và giữ vững đoàn kết xã hội",
                    "Áp đặt bằng mệnh lệnh chủ quan",
                    "Tách khỏi pháp luật và chính sách",
                    "Chỉ giải quyết trên phương diện lý thuyết"
                ],
                correct: 0,
                category: "Ôn tập chương 6",
                explanation: "Cả hai lĩnh vực đều cần được tiếp cận trên tinh thần tôn trọng quyền con người, đoàn kết và quản lý bằng pháp luật."
            },
            {
                question: "Thử thách vượt ải: vì sao xây dựng gia đình tiến bộ có ý nghĩa xã hội lớn?",
                answers: [
                    "Vì gia đình là môi trường trực tiếp hình thành nhân cách và duy trì giá trị xã hội",
                    "Vì gia đình không liên quan đến phát triển con người",
                    "Vì gia đình chỉ là vấn đề riêng tư tuyệt đối",
                    "Vì gia đình không ảnh hưởng đến cộng đồng"
                ],
                correct: 0,
                category: "Ôn tập chương 6",
                explanation: "Gia đình ảnh hưởng trực tiếp tới con người, đạo đức, giáo dục và sự bền vững của xã hội."
            }
        ]
    }
];

const mazeNodes = [
    { id: 0, x: 10, y: 16, label: "Cửa vào ải", type: "start" },
    { id: 1, x: 28, y: 16, label: "Hành lang đầu", type: "path" },
    { id: 2, x: 28, y: 34, label: "Cổng tri thức 1", type: "gate", gateIndex: 0 },
    { id: 3, x: 50, y: 34, label: "Khúc quanh đá", type: "path" },
    { id: 4, x: 50, y: 56, label: "Cổng tri thức 2", type: "gate", gateIndex: 1 },
    { id: 5, x: 70, y: 56, label: "Đường hầm sâu", type: "path" },
    { id: 6, x: 70, y: 78, label: "Cổng tri thức 3", type: "gate", gateIndex: 2 },
    { id: 7, x: 86, y: 78, label: "Thử thách vượt ải", type: "review" },
    { id: 8, x: 86, y: 90, label: "Cửa sang ải mới", type: "exit" }
];

let gameState = {};

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioCtx();
    }
}

function playTone(freq, duration, type = "sine", volume = 0.15) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playCorrectSound() {
    playTone(523, 0.15, "sine", 0.12);
    setTimeout(() => playTone(659, 0.15, "sine", 0.12), 100);
    setTimeout(() => playTone(784, 0.3, "sine", 0.12), 200);
}

function playWrongSound() {
    playTone(200, 0.3, "sawtooth", 0.08);
    setTimeout(() => playTone(150, 0.4, "sawtooth", 0.06), 150);
}

function playChainBreak() {
    playTone(880, 0.1, "square", 0.06);
    setTimeout(() => playTone(1100, 0.08, "square", 0.05), 50);
    setTimeout(() => playTone(1400, 0.15, "triangle", 0.08), 100);
}

function playStepSound() {
    playTone(320, 0.08, "triangle", 0.035);
}

function playVictorySound() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((n, i) => {
        setTimeout(() => playTone(n, 0.4, "sine", 0.1), i * 200);
    });
}

function playDefeatSound() {
    playTone(300, 0.5, "sawtooth", 0.08);
    setTimeout(() => playTone(200, 0.6, "sawtooth", 0.06), 300);
    setTimeout(() => playTone(100, 1, "sawtooth", 0.04), 600);
}

function createParticles() {
    const container = document.getElementById("particles");
    container.innerHTML = "";
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        const size = Math.random() * 3 + 1;
        const lightLevel = gameState.lightIntensity / 100;
        const goldOpacity = 0.1 + lightLevel * 0.5;
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            background: rgba(255, ${180 + Math.random() * 75}, ${Math.random() * 100}, ${goldOpacity});
            box-shadow: 0 0 ${size * 2}px rgba(255, 215, 0, ${goldOpacity * 0.5});
            animation-duration: ${8 + Math.random() * 15}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

function createFireEmbers() {
    const container = document.getElementById("fireEmbers");
    container.innerHTML = "";
    for (let i = 0; i < 20; i++) {
        const ember = document.createElement("div");
        ember.classList.add("ember");
        const size = Math.random() * 4 + 2;
        const hue = 20 + Math.random() * 30;
        ember.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            background: hsl(${hue}, 100%, ${50 + Math.random() * 30}%);
            box-shadow: 0 0 ${size * 3}px hsl(${hue}, 100%, 50%), 0 0 ${size * 6}px rgba(255, 140, 0, 0.3);
            animation-duration: ${6 + Math.random() * 10}s;
            animation-delay: ${Math.random() * 8}s;
        `;
        container.appendChild(ember);
    }
}

function createShadowCreatures() {
    const container = document.getElementById("shadowCreatures");
    container.innerHTML = "";
    const positions = [
        { left: "-80px", top: "30%" },
        { right: "-80px", top: "45%" },
        { left: "-80px", bottom: "20%" },
        { right: "-80px", top: "25%" },
        { left: "5%", bottom: "-80px" }
    ];

    positions.forEach((pos, i) => {
        const creature = document.createElement("div");
        creature.classList.add("shadow-creature");
        creature.id = `shadow-${i}`;
        creature.innerHTML = '<div class="eyes"><div class="eye"></div><div class="eye"></div></div>';
        Object.entries(pos).forEach(([key, value]) => {
            creature.style[key] = value;
        });
        container.appendChild(creature);
    });

    gameState.shadowCreatures = document.querySelectorAll(".shadow-creature");
}

function updateShadowCreatures() {
    const progress = gameState.darknessLevel / 100;
    gameState.shadowCreatures.forEach((creature, i) => {
        const threshold = (i + 1) * 20;
        if (gameState.darknessLevel >= threshold) {
            creature.style.opacity = 0.28 + progress * 0.5;
            const moveAmount = 40 + progress * 80;
            if (creature.style.left && creature.style.left.includes("-")) {
                creature.style.transform = `translateX(${moveAmount}px)`;
            } else if (creature.style.right && creature.style.right.includes("-")) {
                creature.style.transform = `translateX(-${moveAmount}px)`;
            } else {
                creature.style.transform = `translateY(-${moveAmount}px)`;
            }
        }
    });
}

function updateLighting() {
    const intensity = gameState.lightIntensity;
    const overlay = document.getElementById("lightOverlay");
    const lightSource = document.getElementById("lightSource");

    const goldAlpha = (intensity / 100) * 0.15;
    const warmAlpha = (intensity / 100) * 0.05;
    overlay.style.background = `
        radial-gradient(
            ellipse at 50% 0%,
            rgba(255, 215, 0, ${goldAlpha}) 0%,
            rgba(255, 174, 66, ${warmAlpha}) 40%,
            transparent 70%
        )
    `;

    const sourceAlpha = (intensity / 100) * 0.4;
    const sourceSize = 420 + intensity * 4;
    lightSource.style.width = `${sourceSize}px`;
    lightSource.style.height = `${sourceSize}px`;
    lightSource.style.background = `
        radial-gradient(
            circle,
            rgba(255, 215, 0, ${sourceAlpha}) 0%,
            rgba(255, 174, 66, ${sourceAlpha * 0.5}) 40%,
            transparent 70%
        )
    `;

    const bgR = 10 + Math.floor((intensity / 100) * 15);
    const bgG = 12 + Math.floor((intensity / 100) * 12);
    const bgB = 18 + Math.floor((intensity / 100) * 8);
    document.body.style.background = `linear-gradient(145deg, rgb(${bgR}, ${bgG}, ${bgB + 10}) 0%, rgb(${bgR + 8}, ${bgG + 6}, ${bgB + 15}) 45%, rgb(${bgR + 12}, ${bgG + 4}, ${bgB}) 100%)`;
}

function updateDarkness() {
    document.getElementById("darknessBar").style.width = `${gameState.darknessLevel}%`;
    const shadowWarning = document.getElementById("shadowWarning");
    if (gameState.darknessLevel >= 60) shadowWarning.classList.remove("hidden");
    else shadowWarning.classList.add("hidden");

    const overlay = document.getElementById("lightOverlay");
    const darknessOverlay = gameState.darknessLevel / 100;
    overlay.style.boxShadow = darknessOverlay > 0.4
        ? `inset 0 0 ${200 * darknessOverlay}px rgba(0, 0, 0, ${darknessOverlay * 0.5})`
        : "none";

    updateShadowCreatures();
}

function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function buildMaze() {
    const container = document.getElementById("mazeNodes");
    container.innerHTML = "";

    mazeNodes.forEach(node => {
        const el = document.createElement("div");
        let className = "maze-node";
        if (node.type === "gate") className += " gate";
        if (node.type === "review") className += " gate review-node";
        if (node.type === "exit") className += " exit-node";
        if (node.type === "start") className += " start-node";
        el.className = className;
        el.id = `maze-node-${node.id}`;
        el.dataset.nodeType = node.type;
        el.style.left = `${node.x}%`;
        el.style.top = `${node.y}%`;
        const marker = document.createElement("span");
        marker.className = "node-marker";
        if (node.type === "gate") marker.textContent = `${node.gateIndex + 1}`;
        else if (node.type === "review") marker.textContent = "!";
        else if (node.type === "exit") marker.textContent = ">";
        else if (node.type === "start") marker.textContent = "S";
        else marker.textContent = ".";
        const label = document.createElement("span");
        label.className = "node-label";
        if (node.type === "gate") label.textContent = `Mốc ${node.gateIndex + 1}`;
        else if (node.type === "review") label.textContent = "Ôn tập";
        else if (node.type === "exit") label.textContent = "Lối ra";
        else if (node.type === "start") label.textContent = "Bắt đầu";
        else label.textContent = "Trạm";
        el.appendChild(marker);
        el.appendChild(label);
        container.appendChild(el);
    });
}

function updateMazeProgress() {
    mazeNodes.forEach(node => {
        const el = document.getElementById(`maze-node-${node.id}`);
        if (!el) return;
        el.classList.toggle("visited", gameState.visitedNodes.has(node.id));
        if (node.type === "gate") {
            el.classList.toggle("unlocked", gameState.currentStage.completedGates.has(node.gateIndex));
        }
        if (node.type === "review") {
            el.classList.toggle("unlocked", gameState.currentStage.reviewPassed);
        }
    });
}

function updatePlayerPosition() {
    const node = mazeNodes[gameState.playerNode];
    const player = document.getElementById("playerToken");
    player.style.left = `${node.x}%`;
    player.style.top = `${node.y}%`;
}

function animatePlayerWalk(direction) {
    const player = document.getElementById("playerToken");
    player.classList.remove("walking-left", "walking-right", "walking");
    player.classList.add("walking", direction < 0 ? "walking-left" : "walking-right");
    clearTimeout(gameState.walkTimer);
    gameState.walkTimer = setTimeout(() => {
        player.classList.remove("walking", "walking-left", "walking-right");
    }, 1100);
}

function getOverallProgress() {
    const stagesPassed = gameState.stageIndex;
    const gateProgress = gameState.currentStage.completedGates.size / 3;
    const reviewProgress = gameState.currentStage.reviewPassed ? 1 : 0;
    const currentStageFraction = Math.min(1, gateProgress * 0.75 + reviewProgress * 0.25);
    return ((stagesPassed + currentStageFraction) / stages.length) * 100;
}

function updateProgress() {
    const progress = getOverallProgress();
    document.getElementById("progressBar").style.width = `${progress}%`;
    document.getElementById("progressText").textContent = `${Math.round(progress)}%`;
}

function breakChain() {
    const chains = document.querySelectorAll(".chain.active");
    if (chains.length > 0) {
        const chain = chains[0];
        chain.classList.add("breaking");
        setTimeout(() => {
            chain.classList.remove("active", "breaking");
            chain.classList.add("broken");
            gameState.chainsRemaining--;
        }, 800);
    }
}

function resetChainsForStage() {
    document.querySelectorAll(".chain").forEach((chain, index) => {
        chain.classList.remove("broken", "breaking");
        chain.classList.toggle("active", index < 3);
        if (index >= 3) chain.classList.add("broken");
    });
    gameState.chainsRemaining = 3;
}

function loseLife() {
    const lives = document.querySelectorAll(".life.active");
    if (lives.length > 0) {
        const life = lives[lives.length - 1];
        life.classList.add("losing");
        setTimeout(() => {
            life.classList.remove("active", "losing");
            life.classList.add("lost");
        }, 600);
    }
}

function resetLives() {
    document.querySelectorAll(".life").forEach(life => {
        life.classList.add("active");
        life.classList.remove("lost", "losing");
    });
}

function updateControls() {
    const disable = gameState.questionOpen;
    document.getElementById("btnBack").disabled = gameState.playerNode === 0 || disable;
    document.getElementById("btnForward").disabled = gameState.playerNode === mazeNodes.length - 1 || disable;
}

function updateStageInfo() {
    const stageNumber = gameState.stageIndex + 1;
    const stage = stages[gameState.stageIndex];
    document.getElementById("stageBadge").textContent = `Ải ${stageNumber}/${stages.length}`;
    document.getElementById("mazeTitle").textContent = `Ải ${stageNumber} - Vượt mê cung chương`;
    document.getElementById("stageSubtitle").textContent = stage.title;
    document.getElementById("stageTitle").textContent = stage.title;
    document.getElementById("stageObjective").textContent = stage.objective;
    updateStageVisuals(stage);
}

function updateStageVisuals(stage) {
    const mazeMap = document.getElementById("mazeMap");
    mazeMap.classList.remove(
        "theme-gate",
        "theme-house",
        "theme-temple",
        "theme-tower",
        "theme-village",
        "theme-sanctuary"
    );
    mazeMap.classList.add(`theme-${stage.theme}`);
    document.getElementById("exitPortal").textContent = stage.landmark;
}

function updateJourneyPanel() {
    const currentNode = mazeNodes[gameState.playerNode];
    document.getElementById("currentStepLabel").textContent = currentNode.label;

    const movementHint = document.getElementById("movementHint");
    const gateTitle = document.getElementById("gateTitle");
    const gateStatusText = document.getElementById("gateStatusText");

    if (currentNode.type === "review" && !gameState.currentStage.reviewPassed) {
        movementHint.textContent = "Bạn đã đến cuối ải. Tiến thêm để bắt đầu chuỗi câu hỏi ôn tập 'Thử thách vượt ải'.";
    } else if (currentNode.type === "exit") {
        movementHint.textContent = gameState.stageIndex === stages.length - 1
            ? "Bạn đã đứng trước cửa thoát cuối cùng của toàn bộ hành trình."
            : "Ải hiện tại đã hoàn thành. Tiến thêm để sang chương kế tiếp.";
    } else {
        movementHint.textContent = "Tiếp tục tiến sâu hơn trong hang và mở từng cổng tri thức của chương này.";
    }

    const nextGate = [0, 1, 2].find(index => !gameState.currentStage.completedGates.has(index));
    if (nextGate !== undefined) {
        gateTitle.textContent = `Cổng tri thức ${nextGate + 1}`;
        gateStatusText.textContent = `Trong ải này còn ${3 - gameState.currentStage.completedGates.size} cổng tri thức chưa mở.`;
    } else if (!gameState.currentStage.reviewPassed) {
        gateTitle.textContent = "Thử thách vượt ải";
        gateStatusText.textContent = "Ba cổng chính đã mở. Hãy hoàn thành tập câu hỏi ôn tập để qua ải.";
    } else {
        gateTitle.textContent = "Ải đã hoàn tất";
        gateStatusText.textContent = "Bạn đã hoàn thành toàn bộ câu hỏi của chương hiện tại.";
    }
}

function closeQuestionModal() {
    gameState.questionOpen = false;
    document.getElementById("questionModal").classList.add("hidden");
    updateControls();
}

function openQuestionSequence(mode, questions, metaLabel) {
    gameState.questionOpen = true;
    gameState.questionMode = mode;
    gameState.questionQueue = questions;
    gameState.questionIndexInQueue = 0;
    gameState.pendingAdvance = null;
    document.getElementById("questionModal").classList.remove("hidden");
    document.getElementById("questionModeLabel").textContent = metaLabel;
    renderCurrentQuestion();
    updateControls();
}

function renderCurrentQuestion() {
    const question = gameState.questionQueue[gameState.questionIndexInQueue];
    gameState.isAnswered = false;

    document.getElementById("questionNumber").textContent =
        gameState.questionMode === "review"
            ? `Ôn tập ${gameState.questionIndexInQueue + 1}/${gameState.questionQueue.length}`
            : `Cổng ${gameState.pendingGateIndex + 1}`;
    document.getElementById("questionCategory").textContent = question.category;
    document.getElementById("questionText").textContent = question.question;
    document.getElementById("feedbackArea").classList.add("hidden");

    const btnNext = document.getElementById("btnNext");
    btnNext.textContent = "Tiếp tục";
    btnNext.onclick = handleQuestionContinue;

    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = "";
    ["A", "B", "C", "D"].forEach((letter, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerHTML = `
            <span class="answer-letter">${letter}</span>
            <span class="answer-text">${question.answers[index]}</span>
        `;
        btn.onclick = () => selectAnswer(index);
        answersContainer.appendChild(btn);
    });
}

function showFeedback(isCorrect, explanation) {
    const feedbackArea = document.getElementById("feedbackArea");
    const feedbackIcon = document.getElementById("feedbackIcon");
    const feedbackText = document.getElementById("feedbackText");
    const explanationText = document.getElementById("explanationText");
    const btnNext = document.getElementById("btnNext");

    feedbackArea.classList.remove("hidden");

    if (isCorrect) {
        feedbackIcon.textContent = gameState.questionMode === "review" ? "☼" : "✦";
        feedbackText.textContent = gameState.questionMode === "review"
            ? "Đúng rồi. Bạn đang vượt qua thử thách ôn tập."
            : "Đúng rồi. Cổng tri thức đã mở.";
        feedbackText.className = "feedback-text correct-text";
        btnNext.textContent = "Đi tiếp";
    } else {
        feedbackIcon.textContent = "☾";
        feedbackText.textContent = "Sai rồi. Bóng tối tiến gần hơn.";
        feedbackText.className = "feedback-text wrong-text";
        btnNext.textContent = gameState.lives > 0 ? "Thử lại" : "Bóng tối nuốt chửng";
    }

    explanationText.textContent = explanation;
}

function selectAnswer(index) {
    if (gameState.isAnswered) return;
    gameState.isAnswered = true;
    initAudio();

    const question = gameState.questionQueue[gameState.questionIndexInQueue];
    const isCorrect = index === question.correct;
    const buttons = document.querySelectorAll(".answer-btn");
    const gameScreen = document.getElementById("gameScreen");

    buttons.forEach(btn => btn.classList.add("disabled"));

    if (isCorrect) {
        buttons[index].classList.add("correct");
        gameState.correctAnswers++;
        gameState.lightIntensity = Math.min(100, gameState.lightIntensity + 10);
        gameState.darknessLevel = Math.max(0, gameState.darknessLevel - 6);
        updateLighting();
        updateDarkness();
        createParticles();
        playCorrectSound();

        if (gameState.questionMode === "gate") {
            const gateIndex = gameState.pendingGateIndex;
            gameState.currentStage.completedGates.add(gateIndex);
            breakChain();
            setTimeout(playChainBreak, 240);
            updateMazeProgress();
            updateProgress();
        } else {
            gameState.lastReviewAnswerCorrect = true;
        }

        gameScreen.classList.add("screen-flash-correct");
        setTimeout(() => gameScreen.classList.remove("screen-flash-correct"), 600);

        showFeedback(true, question.explanation);
    } else {
        if (gameState.questionMode === "review") {
            gameState.lastReviewAnswerCorrect = false;
        }
        buttons[index].classList.add("wrong");
        buttons[question.correct].classList.add("show-correct");
        gameState.wrongAnswers++;
        gameState.lives--;
        gameState.lightIntensity = Math.max(0, gameState.lightIntensity - 6);
        gameState.darknessLevel = Math.min(100, gameState.darknessLevel + 20);
        updateLighting();
        updateDarkness();
        loseLife();
        playWrongSound();

        gameScreen.classList.add("screen-flash-wrong");
        setTimeout(() => gameScreen.classList.remove("screen-flash-wrong"), 600);

        showFeedback(false, question.explanation);
        if (gameState.lives <= 0) {
            setTimeout(showLoseScreen, 1200);
        }
    }
}

function handleQuestionContinue() {
    if (!gameState.isAnswered) return;

    if (gameState.lives <= 0) {
        closeQuestionModal();
        showLoseScreen();
        return;
    }

    const questionAnsweredCorrectly =
        gameState.questionMode === "gate" &&
        gameState.currentStage.completedGates.has(gameState.pendingGateIndex);

    if (gameState.questionMode === "review") {
        if (!gameState.lastReviewAnswerCorrect) {
            renderCurrentQuestion();
            return;
        }

        if (gameState.questionIndexInQueue < gameState.questionQueue.length - 1) {
            gameState.questionIndexInQueue++;
            gameState.lastReviewAnswerCorrect = false;
            renderCurrentQuestion();
            return;
        }

        gameState.currentStage.reviewPassed = true;
        gameState.completedStages = Math.max(gameState.completedStages, gameState.stageIndex + 1);
        closeQuestionModal();
        updateMazeProgress();
        updateProgress();
        updateJourneyPanel();
        return;
    }

    if (!questionAnsweredCorrectly) {
        renderCurrentQuestion();
        return;
    }

    closeQuestionModal();
    forceMoveToNode(gameState.pendingGateNodeId);
    gameState.pendingGateIndex = null;
    gameState.pendingGateNodeId = null;
}

function forceMoveToNode(nodeId) {
    const direction = nodeId >= gameState.playerNode ? 1 : -1;
    animatePlayerWalk(direction);
    gameState.playerNode = nodeId;
    gameState.visitedNodes.add(nodeId);
    updatePlayerPosition();
    updateMazeProgress();
    updateProgress();
    updateJourneyPanel();
    updateControls();
    playStepSound();
}

function startGateQuestion(gateNode) {
    const gateQuestion = [stages[gameState.stageIndex].gates[gateNode.gateIndex]];
    gameState.pendingGateIndex = gateNode.gateIndex;
    gameState.pendingGateNodeId = gateNode.id;
    openQuestionSequence("gate", gateQuestion, "Thử thách cổng tri thức");
}

function startReviewChallenge() {
    const reviewQuestions = stages[gameState.stageIndex].review;
    gameState.lastReviewAnswerCorrect = false;
    openQuestionSequence("review", reviewQuestions, "Thử thách vượt ải");
}

function movePlayer(direction) {
    if (gameState.questionOpen) return;

    const targetIndex = gameState.playerNode + direction;
    if (targetIndex < 0 || targetIndex >= mazeNodes.length) return;

    const targetNode = mazeNodes[targetIndex];

    if (targetNode.type === "gate" && !gameState.currentStage.completedGates.has(targetNode.gateIndex)) {
        startGateQuestion(targetNode);
        return;
    }

    if (targetNode.type === "review" && !gameState.currentStage.reviewPassed) {
        forceMoveToNode(targetIndex);
        startReviewChallenge();
        return;
    }

    if (targetNode.type === "exit") {
        if (!gameState.currentStage.reviewPassed) {
            return;
        }

        forceMoveToNode(targetIndex);
        if (gameState.stageIndex === stages.length - 1) {
            setTimeout(showWinScreen, 500);
        } else {
            setTimeout(nextStage, 600);
        }
        return;
    }

    forceMoveToNode(targetIndex);
}

function resetHUD() {
    resetChainsForStage();
    resetLives();
    document.getElementById("darknessBar").style.width = "0%";
    document.getElementById("shadowWarning").classList.add("hidden");
    document.getElementById("lightOverlay").style.background = "transparent";
    document.getElementById("lightOverlay").style.boxShadow = "none";
}

function createStageState(stageIndex) {
    return {
        stageIndex,
        playerNode: 0,
        visitedNodes: new Set([0]),
        currentStage: {
            completedGates: new Set(),
            reviewPassed: false
        },
        questionOpen: false,
        questionMode: null,
        questionQueue: [],
        questionIndexInQueue: 0,
        pendingGateIndex: null,
        pendingGateNodeId: null
    };
}

function createInitialGameState() {
    return {
        stageIndex: 0,
        completedStages: 0,
        lives: 5,
        correctAnswers: 0,
        wrongAnswers: 0,
        lightIntensity: 8,
        darknessLevel: 0,
        chainsRemaining: 3,
        shadowCreatures: [],
        isAnswered: false,
        lastReviewAnswerCorrect: false,
        ...createStageState(0)
    };
}

function loadStage(stageIndex) {
    const preserved = {
        lives: gameState.lives,
        correctAnswers: gameState.correctAnswers,
        wrongAnswers: gameState.wrongAnswers,
        lightIntensity: gameState.lightIntensity,
        darknessLevel: gameState.darknessLevel,
        completedStages: gameState.completedStages,
        shadowCreatures: gameState.shadowCreatures
    };

    gameState = {
        ...gameState,
        ...preserved,
        ...createStageState(stageIndex)
    };

    resetChainsForStage();
    buildMaze();
    updateStageInfo();
    updatePlayerPosition();
    updateMazeProgress();
    updateProgress();
    updateJourneyPanel();
    updateControls();
}

function startGame() {
    initAudio();
    gameState = createInitialGameState();
    resetHUD();
    createParticles();
    createShadowCreatures();
    updateLighting();
    updateDarkness();
    loadStage(0);
    closeQuestionModal();
    showScreen("gameScreen");
}

function nextStage() {
    const nextIndex = gameState.stageIndex + 1;
    if (nextIndex >= stages.length) {
        showWinScreen();
        return;
    }

    gameState.completedStages = nextIndex;
    loadStage(nextIndex);
}

function showWinScreen() {
    if (document.getElementById("winScreen").classList.contains("active")) return;

    playVictorySound();
    gameState.lightIntensity = 100;
    updateLighting();
    document.getElementById("winCorrect").textContent = stages.length;
    document.getElementById("winWrong").textContent = gameState.wrongAnswers;
    document.getElementById("winLives").textContent = gameState.lives;
    setTimeout(() => showScreen("winScreen"), 700);
}

function showLoseScreen() {
    if (document.getElementById("loseScreen").classList.contains("active")) return;

    playDefeatSound();
    gameState.darknessLevel = 100;
    gameState.lightIntensity = 0;
    updateLighting();
    updateDarkness();
    document.getElementById("loseCorrect").textContent = gameState.completedStages;
    document.getElementById("loseWrong").textContent = gameState.wrongAnswers;
    document.getElementById("loseChains").textContent = gameState.stageIndex + 1;
    setTimeout(() => showScreen("loseScreen"), 700);
}

function restartGame() {
    document.body.style.background = "linear-gradient(145deg, #08101d 0%, #132033 35%, #20172d 70%, #090b10 100%)";
    document.getElementById("lightOverlay").style.background = "transparent";
    document.getElementById("lightOverlay").style.boxShadow = "none";
    closeQuestionModal();
    showScreen("startScreen");
    createParticles();
    createFireEmbers();
}

document.addEventListener("DOMContentLoaded", () => {
    gameState = createInitialGameState();
    createParticles();
    createFireEmbers();
    buildMaze();
    updatePlayerPosition();
    updateMazeProgress();
    updateStageInfo();
    updateJourneyPanel();

    document.addEventListener("keydown", event => {
        const gameActive = document.getElementById("gameScreen").classList.contains("active");
        if (!gameActive) {
            if (event.key === "Enter") {
                const startScreen = document.getElementById("startScreen");
                const winScreen = document.getElementById("winScreen");
                const loseScreen = document.getElementById("loseScreen");
                if (startScreen.classList.contains("active")) startGame();
                else if (winScreen.classList.contains("active") || loseScreen.classList.contains("active")) restartGame();
            }
            return;
        }

        if (gameState.questionOpen) {
            if (!gameState.isAnswered) {
                const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
                const answerIndex = keyMap[event.key.toLowerCase()];
                if (answerIndex !== undefined) selectAnswer(answerIndex);
            } else if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleQuestionContinue();
            }
            return;
        }

        if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
            movePlayer(1);
        } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
            movePlayer(-1);
        }
    });
});

// Import dữ liệu từ quiz.js
const quizDataByPeriod = {
    "hung_vuong": [
        {
            question: "Nhà nước đầu tiên trong lịch sử Việt Nam thời Hùng Vương có tên là gì?",
            options: ["Âu Lạc", "Văn Lang", "Đại Việt", "Nam Việt"],
            correct: 1,
            explanation: "Văn Lang là nhà nước đầu tiên được thành lập dưới thời Hùng Vương."
        },
        {
            question: "Kinh đô của nước Văn Lang được đặt tại đâu?",
            options: ["Cổ Loa", "Phong Châu", "Hoa Lư", "Thăng Long"],
            correct: 1,
            explanation: "Phong Châu là kinh đô của nước Văn Lang."
        },
        {
            question: "Người đứng đầu nhà nước Văn Lang được gọi là gì?",
            options: ["Hoàng đế", "Vua Hùng", "Lạc tướng", "Tù trưởng"],
            correct: 1,
            explanation: "Vua Hùng là người đứng đầu nhà nước Văn Lang."
        },
        {
            question: "Nhà nước Văn Lang được chia thành các đơn vị hành chính gọi là gì?",
            options: ["Quận", "Châu", "Bộ", "Phủ"],
            correct: 2,
            explanation: "Bộ là đơn vị hành chính cơ bản của Văn Lang."
        },
        {
            question: "Dưới thời Hùng Vương, tầng lớp đứng đầu các bộ được gọi là:",
            options: ["Lạc hầu", "Lạc tướng", "Bố chính", "Thái thú"],
            correct: 1,
            explanation: "Lạc tướng là người đứng đầu các bộ dưới thời Hùng Vương."
        },
        {
            question: "Nền kinh tế chủ yếu của cư dân Văn Lang là gì?",
            options: ["Thủ công nghiệp", "Buôn bán", "Nông nghiệp trồng lúa nước", "Khai thác khoáng sản"],
            correct: 2,
            explanation: "Nông nghiệp trồng lúa nước là nền kinh tế chủ yếu."
        },
        {
            question: "Thời Hùng Vương gắn liền với nền văn hóa khảo cổ nào?",
            options: ["Văn hóa Sa Huỳnh", "Văn hóa Óc Eo", "Văn hóa Đông Sơn", "Văn hóa Hòa Bình"],
            correct: 2,
            explanation: "Văn hóa Đông Sơn là nền văn hóa khảo cổ của thời Hùng Vương."
        },
        {
            question: "Truyền thuyết 'Con Rồng Cháu Tiên' phản ánh điều gì?",
            options: ["Nguồn gốc chung của dân tộc Việt Nam", "Sự phân chia giai cấp xã hội", "Cuộc chiến tranh chống ngoại xâm", "Sự hình thành chữ viết"],
            correct: 0,
            explanation: "Truyền thuyết này phản ánh nguồn gốc chung của dân tộc Việt Nam."
        },
        {
            question: "Ngày Giỗ Tổ Hùng Vương thể hiện truyền thống nào của dân tộc Việt Nam?",
            options: ["Uống nước nhớ nguồn", "Tôn sư trọng đạo", "Đoàn kết chống giặc ngoại xâm", "Hiếu học"],
            correct: 0,
            explanation: "Ngày Giỗ Tổ thể hiện truyền thống uống nước nhớ nguồn."
        }
    ],
    "bac_thuoc": [
        {
            question: "Chính sách đồng hóa của các triều đại phong kiến phương Bắc nhằm mục đích chủ yếu nào?",
            options: ["Phát triển kinh tế cho người Việt", "Biến nước ta thành bộ phận lãnh thổ của họ", "Giúp người Việt tiếp cận văn minh Trung Hoa", "Tăng cường giao lưu văn hóa"],
            correct: 1,
            explanation: "Mục đích chính là biến Việt Nam thành bộ phận lãnh thổ của phương Bắc."
        },
        {
            question: "Khởi nghĩa Hai Bà Trưng thể hiện rõ nhất điều gì của dân tộc ta?",
            options: ["Tinh thần đoàn kết các dân tộc", "Vai trò lãnh đạo của phụ nữ", "Ý chí độc lập và tinh thần yêu nước mạnh mẽ", "Sự phát triển kinh tế"],
            correct: 2,
            explanation: "Khởi nghĩa thể hiện ý chí độc lập và tinh thần yêu nước mạnh mẽ."
        },
        {
            question: "Việc Hai Bà Trưng lên ngôi vua cho thấy đặc điểm gì của xã hội Việt Nam?",
            options: ["Xã hội chịu ảnh hưởng sâu sắc Nho giáo", "Phụ nữ có vị thế cao trong xã hội", "Chế độ quân chủ đã hoàn thiện", "Giai cấp quý tộc nắm quyền tuyệt đối"],
            correct: 1,
            explanation: "Điều này cho thấy phụ nữ có vị thế cao trong xã hội Việt Nam thời bấy giờ."
        },
        {
            question: "Câu nói của Bà Triệu: 'Tôi muốn cưỡi cơn gió mạnh...' thể hiện điều gì?",
            options: ["Ước mơ phiêu lưu", "Tinh thần bất khuất, khát vọng tự do", "Sự tự mãn cá nhân", "Tư tưởng thần quyền"],
            correct: 1,
            explanation: "Câu nói này thể hiện tinh thần bất khuất và khát vọng tự do."
        },
        {
            question: "Nguyên nhân cơ bản khiến các cuộc khởi nghĩa thời Bắc thuộc chưa giành được thắng lợi lâu dài là gì?",
            options: ["Nhân dân không ủng hộ", "Thiếu sự lãnh đạo", "Lực lượng còn yếu, kẻ thù mạnh", "Mục tiêu đấu tranh chưa rõ ràng"],
            correct: 2,
            explanation: "Lực lượng còn yếu kém so với kẻ thù mạnh là nguyên nhân cơ bản."
        },
        {
            question: "Sức sống bền bỉ của văn hóa dân tộc Việt Nam trong thời Bắc thuộc được chứng tỏ như thế nào?",
            options: ["Người Việt nhanh chóng đồng hóa", "Người Việt vẫn giữ được phong tục, tập quán riêng", "Văn hóa Hán chiếm ưu thế tuyệt đối", "Không có sự kháng cự nào"],
            correct: 1,
            explanation: "Việc giữ phong tục, tập quán riêng chứng tỏ sức sống bền bỉ của văn hóa."
        },
        {
            question: "Điểm chung nổi bật của các cuộc khởi nghĩa trong thời Bắc thuộc là gì?",
            options: ["Do tầng lớp quý tộc lãnh đạo", "Chỉ diễn ra ở miền núi", "Nhằm giành lại độc lập dân tộc", "Nhận được sự giúp đỡ từ bên ngoài"],
            correct: 2,
            explanation: "Điểm chung là tất cả đều nhằm giành lại độc lập dân tộc."
        },
        {
            question: "Nếu không có các cuộc khởi nghĩa liên tiếp, khả năng lớn nhất đối với dân tộc ta là gì?",
            options: ["Nhanh chóng giành được độc lập", "Bị đồng hóa hoàn toàn", "Phát triển mạnh về kinh tế", "Trở thành trung tâm văn hóa khu vực"],
            correct: 1,
            explanation: "Nếu không kháng cự, dân tộc ta sẽ bị đồng hóa hoàn toàn."
        }
    ],
    "phong_kien": [
        {
            question: "Năm nào Đinh Bộ Lĩnh giành độc lập cho Việt Nam?",
            options: ["936", "938", "940", "942"],
            correct: 1,
            explanation: "Năm 938, Đinh Bộ Lĩnh đánh bại quân Tấn Hạm trong trận Bạch Đằng Giang."
        },
        {
            question: "Ai là vị tướng vĩ đại chống quân Nguyên?",
            options: ["Lý Thái Tổ", "Trần Hưng Đạo", "Hồ Quý Ly", "Nguyễn Ánh"],
            correct: 1,
            explanation: "Trần Hưng Đạo là vị tướng vĩ đại người đã đánh bại quân Nguyên 3 lần."
        },
        {
            question: "Trận Bạch Đằng Giang sử dụng chiến thuật gì?",
            options: ["Cắm cọc sắt dưới lòng sông", "Bao vây thành", "Tấn công đêm", "Chiếm đảo"],
            correct: 0,
            explanation: "Đinh Bộ Lĩnh đã cắm cọc sắt dưới lòng sông để tiêu diệt hạm đội."
        },
        {
            question: "Bao lâu Việt Nam bị chiếm đóng trước năm 938?",
            options: ["500 năm", "800 năm", "1000 năm", "1200 năm"],
            correct: 2,
            explanation: "Việt Nam bị chiếm đóng khoảng 1000 năm từ thế kỷ II đến thế kỷ X."
        },
        {
            question: "Hà Nội được thành lập vào năm nào?",
            options: ["938", "968", "1010", "1200"],
            correct: 2,
            explanation: "Hà Nội được thành lập năm 1010 bởi Lý Thái Tổ với tên gọi Thăng Long."
        },
        {
            question: "Chính sách 'ngụ binh ư nông' nhằm mục đích:",
            options: ["Tăng quân số", "Giảm sản xuất", "Gắn quốc phòng với kinh tế", "Hạn chế quân đội"],
            correct: 2,
            explanation: "Chính sách này nhằm gắn quốc phòng với nông nghiệp."
        },
        {
            question: "Ba lần kháng chiến chống Mông – Nguyên thắng lợi chủ yếu nhờ:",
            options: ["Vũ khí hiện đại", "Quân số đông", "Đoàn kết toàn dân và chiến lược đúng đắn", "Viện trợ nước ngoài"],
            correct: 2,
            explanation: "Thắng lợi chủ yếu nhờ đoàn kết toàn dân và chiến lược sáng tạo."
        },
        {
            question: "Hội nghị Diên Hồng thể hiện truyền thống nào?",
            options: ["Hiếu học", "Tôn sư trọng đạo", "Dân chủ, đoàn kết", "Trọng nông"],
            correct: 2,
            explanation: "Hội nghị thể hiện truyền thống dân chủ và đoàn kết toàn dân."
        },
        {
            question: "Bộ luật Hồng Đức được ban hành dưới triều đại nào?",
            options: ["Lý", "Trần", "Lê sơ", "Nguyễn"],
            correct: 2,
            explanation: "Bộ luật Hồng Đức được ban hành dưới triều đại Lê sơ."
        },
        {
            question: "Khởi nghĩa Lam Sơn thắng lợi có ý nghĩa quan trọng nhất là gì?",
            options: ["Mở rộng lãnh thổ", "Đánh bại hoàn toàn phong kiến phương Bắc", "Giành lại độc lập, mở ra thời kì phát triển mới", "Thay đổi chế độ chính trị"],
            correct: 2,
            explanation: "Khởi nghĩa giành lại độc lập cho đất nước."
        },
        {
            question: "Chính sách 'trọng nông, ức thương' thời phong kiến Việt Nam dẫn đến hậu quả nào?",
            options: ["Thương nghiệp phát triển mạnh", "Kinh tế nông nghiệp bị suy yếu", "Thương nghiệp kém phát triển so với tiềm năng", "Xã hội ổn định lâu dài"],
            correct: 2,
            explanation: "Chính sách này làm thương nghiệp kém phát triển so với tiềm năng."
        },
        {
            question: "Việc mở mang lãnh thổ về phía Nam thể hiện điều gì?",
            options: ["Mong muốn giao lưu văn hóa", "Nhu cầu mở rộng không gian sinh tồn", "Tham vọng xâm lược", "Áp lực từ phương Bắc"],
            correct: 1,
            explanation: "Nhu cầu mở rộng không gian sinh tồn và phát triển đất nước."
        },
        {
            question: "Chính sách 'bế quan tỏa cảng' của nhà Nguyễn dẫn đến hậu quả lớn nhất là gì?",
            options: ["Ổn định xã hội", "Tăng quốc phòng", "Việt Nam tụt hậu so với phương Tây", "Phát triển thương nghiệp"],
            correct: 2,
            explanation: "Chính sách này làm Việt Nam tụt hậu so với phương Tây."
        }
    ],
    "phap_thuoc": [
        {
            question: "Chính sách khai thác thuộc địa của thực dân Pháp nhằm mục đích chủ yếu nào?",
            options: ["Phát triển kinh tế Việt Nam", "Khai hóa văn minh", "Bóc lột tài nguyên để phục vụ chính quốc", "Xây dựng xã hội công bằng"],
            correct: 2,
            explanation: "Mục đích chính là bóc lột tài nguyên và sức lao động."
        },
        {
            question: "Việc thực dân Pháp duy trì chế độ phong kiến tay sai cho thấy điều gì?",
            options: ["Tôn trọng truyền thống Việt Nam", "Dễ dàng cai trị và bóc lột", "Giúp ổn định xã hội", "Phát triển văn hóa dân tộc"],
            correct: 1,
            explanation: "Duy trì chế độ này giúp Pháp dễ cai trị và bóc lột nhân dân."
        },
        {
            question: "Sự ra đời của giai cấp công nhân Việt Nam gắn liền trực tiếp với:",
            options: ["Nông nghiệp phát triển", "Chính sách khai thác thuộc địa của Pháp", "Ảnh hưởng từ Trung Quốc", "Phong trào Cần Vương"],
            correct: 1,
            explanation: "Giai cấp công nhân ra đời từ chính sách khai thác của Pháp."
        },
        {
            question: "Điểm khác biệt căn bản giữa phong trào Phan Bội Châu – Phan Châu Trinh và Cần Vương là:",
            options: ["Thành phần lãnh đạo", "Mục tiêu đấu tranh", "Hình thức đấu tranh", "Ý thức hệ và con đường cứu nước"],
            correct: 3,
            explanation: "Khác biệt về ý thức hệ và con đường cứu nước giữa các phong trào."
        },
        {
            question: "Phong trào Đông Du thất bại chủ yếu vì:",
            options: ["Nhân dân không ủng hộ", "Nhật Bản phản bội", "Thiếu đường lối đúng, phụ thuộc bên ngoài", "Thực dân Pháp quá mạnh"],
            correct: 2,
            explanation: "Thiếu đường lối đúng đắn và phụ thuộc vào bên ngoài."
        },
        {
            question: "Sự thất bại của các phong trào yêu nước cho thấy yêu cầu cấp bách là:",
            options: ["Cải cách giáo dục", "Tăng cường vũ khí", "Tìm ra con đường cứu nước mới, đúng đắn", "Liên minh với phong kiến"],
            correct: 2,
            explanation: "Cần tìm con đường cứu nước đúng đắn phù hợp thực tiễn."
        },
        {
            question: "Chính sách 'chia để trị' của thực dân Pháp nhằm mục đích:",
            options: ["Phát triển vùng miền", "Gây chia rẽ dân tộc, dễ cai trị", "Bảo vệ dân tộc thiểu số", "Thúc đẩy giao lưu văn hóa"],
            correct: 1,
            explanation: "Nhằm gây chia rẽ giữa các vùng miền để dễ bề thống trị."
        },
        {
            question: "Tại sao giai cấp công nhân sớm trở thành lực lượng lãnh đạo cách mạng?",
            options: ["Có số lượng đông nhất", "Có tinh thần yêu nước", "Gắn với phương thức sản xuất tiên tiến và tổ chức kỉ luật", "Được ưu đãi"],
            correct: 2,
            explanation: "Giai cấp công nhân gắn với phương thức sản xuất tiên tiến."
        },
        {
            question: "Việc Nguyễn Ái Quốc ra đi năm 1911 phản ánh điều gì?",
            options: ["Phát triển phong trào", "Sự bế tắc của các con đường cũ", "Ảnh hưởng Cách mạng Nga", "Mong muốn cá nhân"],
            correct: 1,
            explanation: "Phản ánh sự bế tắc của các con đường cứu nước cũ."
        }
    ],
    "hien_dai": [
        {
            question: "Sự kiện đánh dấu sự ra đời của nước Việt Nam Dân chủ Cộng hòa là:",
            options: ["Tổng khởi nghĩa tháng Tám", "Ngày 2/9/1945", "Hiệp định Giơ-ne-vơ", "Chiến thắng Điện Biên Phủ"],
            correct: 1,
            explanation: "Ngày 2/9/1945 đánh dấu sự ra đời của VNDCCH."
        },
        {
            question: "Đảng Cộng sản Việt Nam được thành lập vào:",
            options: ["3/2/1929", "3/2/1930", "19/5/1941", "2/9/1945"],
            correct: 1,
            explanation: "Đảng Cộng sản Việt Nam thành lập ngày 3/2/1930."
        },
        {
            question: "Ý nghĩa lớn nhất của việc thành lập Đảng Cộng sản Việt Nam là:",
            options: ["Chấm dứt phong kiến", "Giải quyết vấn đề ruộng đất", "Chấm dứt khủng hoảng về đường lối lãnh đạo", "Thành lập mặt trận dân tộc"],
            correct: 2,
            explanation: "Giải quyết khủng hoảng về đường lối và tổ chức lãnh đạo."
        },
        {
            question: "Chiến thắng Điện Biên Phủ năm 1954 dẫn đến kết quả nào?",
            options: ["Mỹ rút quân", "Pháp chấm dứt chiến tranh xâm lược", "Thống nhất đất nước", "Thành lập VNDCCH"],
            correct: 1,
            explanation: "Pháp buộc phải kết thúc cuộc chiến xâm lược."
        },
        {
            question: "Đường lối kháng chiến chống Pháp được xác định là:",
            options: ["Nhanh chóng, bí mật", "Trường kì, tự lực cánh sinh, tranh thủ quốc tế", "Đánh nhanh thắng nhanh", "Phòng thủ là chủ yếu"],
            correct: 1,
            explanation: "Trường kì, tự lực cánh sinh, tranh thủ quốc tế là đường lối đúng."
        },
        {
            question: "Sau Hiệp định Giơ-ne-vơ 1954, Việt Nam rơi vào tình trạng:",
            options: ["Hoàn toàn độc lập", "Chia cắt lâu dài", "Tạm thời chia cắt hai miền", "Dưới sự bảo hộ Liên Hợp Quốc"],
            correct: 2,
            explanation: "Hiệp định dẫn đến tạm thời chia cắt thành hai miền."
        },
        {
            question: "Vai trò của miền Bắc sau 1954 là:",
            options: ["Trung tâm kinh tế", "Tiền tuyến lớn", "Hậu phương lớn cho miền Nam", "Khu vực trung lập"],
            correct: 2,
            explanation: "Miền Bắc đóng vai trò hậu phương lớn cho cuộc đấu tranh."
        },
        {
            question: "Chiến dịch quyết định giải phóng miền Nam năm 1975 là:",
            options: ["Chiến dịch Tây Nguyên", "Chiến dịch Huế – Đà Nẵng", "Chiến dịch Hồ Chí Minh", "Chiến dịch Đường 9"],
            correct: 2,
            explanation: "Chiến dịch Hồ Chí Minh là chiến dịch quyết định năm 1975."
        },
        {
            question: "Nguyên nhân đề ra đường lối Đổi mới năm 1986 là:",
            options: ["Đất nước thống nhất", "Hội nhập quốc tế", "Khủng hoảng kinh tế – xã hội kéo dài", "Ảnh hưởng Liên Xô"],
            correct: 2,
            explanation: "Khủng hoảng kinh tế – xã hội kéo dài là nguyên nhân chính."
        },
        {
            question: "Ý nghĩa quan trọng nhất của công cuộc Đổi mới là:",
            options: ["Thay đổi chế độ", "Trở thành nước phát triển", "Tạo bước chuyển căn bản trong phát triển kinh tế – xã hội", "Mở rộng quan hệ quân sự"],
            correct: 2,
            explanation: "Tạo bước chuyển căn bản trong phát triển kinh tế – xã hội."
        }
    ]
};

// Ánh xạ giữa ID từ localStorage và key dữ liệu
const quizMapping = {
    'hung-kings': 'hung_vuong',
    'bac-thuoc': 'bac_thuoc',
    'phong-kien': 'phong_kien',
    'thuoc-phap': 'phap_thuoc',
    'hien-dai': 'hien_dai',
    'all-history': 'hien_dai'
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let timeRemaining = 0;
let timerInterval = null;
let userAnswers = {};
let timeStarted = 0;

// Khởi tạo khi trang tải
window.addEventListener('DOMContentLoaded', function() {
    const quizType = localStorage.getItem('currentQuizType');
    const mappedQuizType = quizMapping[quizType];
    
    if (mappedQuizType && quizDataByPeriod[mappedQuizType]) {
        // Tạo quiz từ dữ liệu
        const questions = quizDataByPeriod[mappedQuizType];
        currentQuiz = {
            title: getTitleByPeriod(mappedQuizType),
            totalTime: questions.length * 60, // 1 phút mỗi câu
            questions: questions.map(q => ({
                question: q.question,
                image: null,
                visualAidLabel: null,
                answers: q.options.map((opt, idx) => ({ 
                    letter: String.fromCharCode(65 + idx),
                    text: opt 
                })),
                correctAnswer: String.fromCharCode(65 + q.correct),
                hint: q.explanation
            }))
        };
        
        currentQuestionIndex = 0;
        userAnswers = {};
        timeRemaining = currentQuiz.totalTime;
        timeStarted = Date.now();
        
        displayQuestion();
        startTimer();
    } else {
        window.location.href = '../quiz.html';
    }
});

// Lấy tiêu đề theo thời kỳ
function getTitleByPeriod(period) {
    const titles = {
        'hung_vuong': '🏯 Thời Hùng Vương',
        'bac_thuoc': '⛓️ Thời Bắc Thuộc',
        'phong_kien': '⚔️ Thời Phong Kiến',
        'phap_thuoc': '🇫🇷 Thời Thuộc Pháp',
        'hien_dai': '🌟 Thời Đại Hiện Đại'
    };
    return titles[period] || 'Quiz';
}

// Hiển thị câu hỏi
function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    // Cập nhật tiêu đề
    document.getElementById('quizTitle').textContent = currentQuiz.title;
    document.getElementById('quizQuestion').textContent = `Câu ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;

    // Cập nhật progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;

    // Hiển thị ảnh nếu có
    const visualSection = document.getElementById('questionVisual');
    if (question.image) {
        visualSection.innerHTML = `
            <img src="${question.image}" alt="Visual Aid">
            <div class="visual-aid-label">
                <i class="fas fa-image"></i>
                ${question.visualAidLabel}
            </div>
        `;
    } else {
        visualSection.innerHTML = '';
    }

    // Hiển thị đáp án
    const answersSection = document.getElementById('answersSection');
    answersSection.innerHTML = '';
    
    question.answers.forEach((answer) => {
        const answerId = `answer_${answer.letter.toLowerCase()}`;
        const isChecked = userAnswers[currentQuestionIndex] === answer.letter ? 'checked' : '';
        
        answersSection.innerHTML += `
            <div class="answer-option">
                <input 
                    type="radio" 
                    id="${answerId}" 
                    name="question_${currentQuestionIndex}" 
                    value="${answer.letter}"
                    ${isChecked}
                    onchange="saveAnswer('${answer.letter}')"
                />
                <label for="${answerId}" class="answer-label">
                    <span class="answer-letter">${answer.letter}</span>
                    <span class="answer-text">${answer.text}</span>
                </label>
            </div>
        `;
    });

    // Cập nhật nút hint
    const hintBtn = document.getElementById('hintBtn');
    if (question.hint) {
        hintBtn.innerHTML = `<i class="fas fa-lightbulb"></i> GỢI Ý: ${question.hint}`;
        hintBtn.disabled = false;
    } else {
        hintBtn.innerHTML = `<i class="fas fa-lightbulb"></i> Không có gợi ý`;
        hintBtn.disabled = true;
    }

    // Cập nhật nút Previous
    const prevBtn = document.getElementById('prevBtn');
    prevBtn.disabled = currentQuestionIndex === 0;

    // Cập nhật nút Next/Submit
    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        nextBtn.innerHTML = 'Nộp Bài <i class="fas fa-check"></i>';
        nextBtn.onclick = function() { submitQuiz(); };
    } else {
        nextBtn.innerHTML = 'Câu Tiếp <i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = function() { nextQuestion(); };
    }
}

// Lưu đáp án
function saveAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
}

// Câu tiếp theo
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Câu trước
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Bắt đầu đếm ngược thời gian
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const timerDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = timerDisplay;

        // Cảnh báo khi sắp hết giờ
        if (timeRemaining <= 60) {
            document.getElementById('timer').classList.add('danger');
        } else if (timeRemaining <= 300) {
            document.getElementById('timer').classList.add('warning');
        }

        // Tự động nộp bài khi hết giờ
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

// Nộp bài kiểm tra
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Tính toán điểm
    let correctCount = 0;
    const details = [];
    
    currentQuiz.questions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correctAnswer;
        if (isCorrect) correctCount++;
        
        details.push({
            questionNumber: index + 1,
            question: question.question,
            userAnswer: userAnswers[index] || 'Không trả lời',
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect
        });
    });

    const score = Math.round((correctCount / currentQuiz.questions.length) * 100);
    const timeSpent = Math.floor((Date.now() - timeStarted) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    
    // Hiển thị kết quả
    displayResults(correctCount, score, details, `${minutes}:${seconds.toString().padStart(2, '0')}`);
}

// Hiển thị kết quả
function displayResults(correctCount, score, details, timeSpent) {
    document.getElementById('quizInterface').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');

    // Cập nhật thông tin điểm
    document.getElementById('scoreNumber').textContent = score;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = currentQuiz.questions.length - correctCount;
    document.getElementById('timeSpent').textContent = timeSpent;

    // Feedback
    let title = '', message = '';
    if (score >= 90) {
        title = '🌟 Tuyệt Vời!';
        message = `Bạn đã trả lời đúng ${correctCount}/${currentQuiz.questions.length} câu hỏi`;
    } else if (score >= 70) {
        title = '👍 Tốt!';
        message = `Bạn đã trả lời đúng ${correctCount}/${currentQuiz.questions.length} câu hỏi`;
    } else if (score >= 50) {
        title = '😐 Trung Bình';
        message = `Bạn đã trả lời đúng ${correctCount}/${currentQuiz.questions.length} câu hỏi`;
    } else {
        title = '📚 Cần Cố Gắng Hơn';
        message = `Bạn đã trả lời đúng ${correctCount}/${currentQuiz.questions.length} câu hỏi`;
    }

    document.getElementById('scoreTitle').textContent = title;
    document.getElementById('scoreMessage').textContent = message;

    // Hiển thị chi tiết
    const detailsList = document.getElementById('detailsList');
    detailsList.innerHTML = '';
    details.forEach(detail => {
        const detailClass = detail.isCorrect ? 'correct' : 'incorrect';
        detailsList.innerHTML += `
            <div class="detail-item ${detailClass}">
                <div class="detail-question">Câu ${detail.questionNumber}: ${detail.question}</div>
                <div class="detail-answer">Bạn chọn: <strong>${detail.userAnswer}</strong></div>
                <div class="detail-answer">Đáp án đúng: <strong>${detail.correctAnswer}</strong></div>
                <span class="detail-status ${detailClass}">
                    ${detail.isCorrect ? '✓ Đúng' : '✗ Sai'}
                </span>
            </div>
        `;
    });
}

// Quay lại chọn quiz
function backToSelection() {
    localStorage.removeItem('currentQuizType');
    window.location.href = '../quiz.html';
}

// Làm lại quiz
function retakeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = currentQuiz.totalTime;
    timeStarted = Date.now();
    
    document.getElementById('quizInterface').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    
    displayQuestion();
    startTimer();
}
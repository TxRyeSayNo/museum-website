// Dữ liệu artifacts Hà Nội - 8 hiện vật chính
const artifacts = [
    {
        id: 1,
        title: 'Bức Tượng Đồng Chủ Tịch Hồ Chí Minh Với Chiến Sĩ Tình Báo',
        period: 'Thế Kỷ 20',
        material: 'Đồng',
        size: '200cm × 150cm',
        time: 'Thế Kỷ 20',
        year: 'Không xác định',
        image: '../../assets/images/artifacts/ho-chi-minh-statue.jpg',
        images: [
            '../../assets/images/artifacts/ho-chi-minh-statue-1.jpg',
            '../../assets/images/artifacts/ho-chi-minh-statue-2.jpg',
            '../../assets/images/artifacts/ho-chi-minh-statue-3.jpg'
        ],
        video: '../../assets/videos/ho-chi-minh-statue.mp4',
        videoDesc: 'Phim tài liệu về bức tượng Chủ tịch Hồ Chí Minh và lực lượng tình báo quốc phòng',
        description: 'Bức tượng đồng Chủ tịch Hồ Chí Minh với chiến sĩ tình báo được trưng bày ở vị trí trang trọng giữa bảo tàng. Với lực lượng tình báo quốc phòng, Bác Hồ dành sự quan tâm đặc biệt.',
        history: 'Ngoài những lần gặp gỡ, trò chuyện với cán bộ, chiến sĩ, Bác Hồ còn chu đáo gửi thư mỗi dịp lực lượng tổ chức hội nghị.',
        significance: 'Biểu tượng của sự quan tâm sâu sắc của Chủ tịch Hồ Chí Minh đối với lực lượng tình báo quốc phòng và đóng góp của họ cho độc lập của đất nước.'
    },
    {
        id: 2,
        title: 'Guốc Chèn Pháo Trung Đoàn 45',
        period: 'Điện Biên Phủ 1954',
        material: 'Gỗ, Kim Loại',
        size: '150cm × 80cm',
        time: 'Thế Kỷ 20',
        year: '1954',
        image: '../../assets/images/artifacts/artillery-wedge.jpg',
        images: [
            '../../assets/images/artifacts/artillery-wedge-1.jpg',
            '../../assets/images/artifacts/artillery-wedge-2.jpg',
            '../../assets/images/artifacts/artillery-wedge-3.jpg'
        ],
        video: '../../assets/videos/artillery-wedge.mp4',
        videoDesc: 'Phim tài liệu về cuộc chiến Điện Biên Phủ năm 1954',
        description: 'Guốc chèn pháo của pháo thủ Trung đoàn 45, Đại đoàn 351 sử dụng khi kéo pháo vào mặt trận Điện Biên Phủ năm 1954. Đây là công cụ quan trọng trong chiến dịch lịch sử này.',
        history: 'Chiến dịch Điện Biên Phủ (1954) là một trong những chiến dịch quân sự vĩ đại nhất của lịch sử Việt Nam, kết thúc cuộc chiến tranh Đông Dương.',
        significance: 'Hiện vật này chứng minh sự sáng tạo và khéo léo của các chiến sĩ Việt Nam trong việc vận dụng lực học để chiến đấu với máy bay chiến đấu hiện đại.'
    },
    {
        id: 3,
        title: 'Bom MK-81 & MK-82',
        period: 'Chiến Tranh Việt Nam (1965-1973)',
        material: 'Thép, Thuốc Nổ',
        size: 'MK-81: 30cm, MK-82: 60cm',
        time: 'Thế Kỷ 20',
        year: '1965-1973',
        image: '../../assets/images/artifacts/bomb-mk.jpg',
        images: [
            '../../assets/images/artifacts/bomb-mk-1.jpg',
            '../../assets/images/artifacts/bomb-mk-2.jpg',
            '../../assets/images/artifacts/bomb-mk-3.jpg'
        ],
        video: '../../assets/videos/bomb-mk.mp4',
        videoDesc: 'Phim tài liệu về bom MK-81 và MK-82 sử dụng trong Chiến tranh Việt Nam',
        description: 'Bom MK-81 và MK-82 do Mỹ sử dụng trong vụ không kích ở miền Bắc Việt Nam. Loại bom MK-81 chứa 44kg thuốc nổ với sức công phá mạnh, có 4 cánh, sẽ bung ra sau khi thả nhằm làm chậm tốc độ rơi. Còn MK-82 có trọng lượng 227kg, mang theo 87kg thuốc nổ Tritonal (hỗn hợp chứa 80% TNT và 20% bột nhôm) với sức công phá rất mạnh.',
        history: 'Những quả bom này được Không quân Mỹ sử dụng từ 1965 đến 1973 trong các cuộc không kích quy mô lớn ở miền Bắc Việt Nam.',
        significance: 'Những vũ khí này thể hiện sức mạnh công nghệ quân sự hiện đại thời chiến tranh lạnh và tàn khốc của cuộc chiến.'
    },
    {
        id: 4,
        title: 'Xe Đạp Thồ Đoàn 559',
        period: 'Đường Trường Sơn (1954-1975)',
        material: 'Thép, Gỗ',
        size: '180cm × 60cm',
        time: 'Thế Kỷ 20',
        year: '1954-1975',
        image: '../../assets/images/artifacts/bicycle-559.jpg',
        images: [
            '../../assets/images/artifacts/bicycle-559-1.jpg',
            '../../assets/images/artifacts/bicycle-559-2.jpg',
            '../../assets/images/artifacts/bicycle-559-3.jpg'
        ],
        video: '../../assets/videos/bicycle-559.mp4',
        videoDesc: 'Phim tài liệu về Đoàn 559 và đường Trường Sơn huyền thoại',
        description: 'Xe đạp thồ của các chiến sĩ Đoàn 559 sử dụng vận chuyển hàng trên đường Trường Sơn. Đây là phương tiện vận tải chính trong những năm khó khăn nhất của cuộc chiến.',
        history: 'Đoàn 559 được thành lập năm 1959 để vận chuyển hàng cấp cho các đơn vị Giải phóng miền Nam. Đường Trường Sơn trở thành đường mòn huyền thoại của cách mạng Việt Nam.',
        significance: 'Xe đạp này tượng trưng cho tinh thần kiên cường, lao động vất vả không khó khăn của những chiến sĩ Đoàn 559.'
    },
    {
        id: 5,
        title: 'Cờ Đội Biệt Động Z32',
        period: 'Giải Phóng Sài Gòn (30/4/1975)',
        material: 'Vải',
        size: '100cm × 150cm',
        time: 'Thế Kỷ 20',
        year: '1975',
        image: '../../assets/images/artifacts/flag-z32.jpg',
        images: [
            '../../assets/images/artifacts/flag-z32-1.jpg',
            '../../assets/images/artifacts/flag-z32-2.jpg',
            '../../assets/images/artifacts/flag-z32-3.jpg'
        ],
        video: '../../assets/videos/flag-z32.mp4',
        videoDesc: 'Phim tài liệu về giải phóng Sài Gòn 30/4/1975',
        description: 'Cờ của Đội biệt động Z32 may, phát cho nhân dân đón bộ đội vào Sài Gòn ngày 30/4/1975. Đây là biểu tượng thiêng liêng của ngày thống nhất đất nước.',
        history: 'Ngày 30/4/1975 là ngày lịch sử huy hoàng, đánh dấu sự thống nhất và giải phóng đất nước sau hơn 100 năm chia cắt.',
        significance: 'Cờ này tượng trưng cho niềm vui vô bờ và hy vọng của nhân dân Việt Nam khi đất nước được thống nhất, kết thúc hơn 20 năm kháng chiến.'
    },
    {
        id: 6,
        title: 'Súng 12,7mm Khẩu Đội 6',
        period: 'Chiến Dịch Đường 9 - Nam Lào (1971)',
        material: 'Thép',
        size: '150cm × 50cm',
        time: 'Thế Kỷ 20',
        year: '1971',
        image: '../../assets/images/artifacts/gun-127.jpg',
        images: [
            '../../assets/images/artifacts/gun-127-1.jpg',
            '../../assets/images/artifacts/gun-127-2.jpg',
            '../../assets/images/artifacts/gun-127-3.jpg'
        ],
        video: '../../assets/videos/gun-127.mp4',
        videoDesc: 'Phim tài liệu về súng 12,7mm và Chiến dịch Đường 9 - Nam Lào',
        description: 'Súng 12,7mm của Khẩu đội 6, Đại đội 16, Trung đoàn 88, Sư đoàn 308 sử dụng trong Chiến dịch Đường 9 - Nam Lào, 1971. Đây là một trong những chiến dịch quân sự quan trọng nhất.',
        history: 'Chiến dịch Đường 9 - Nam Lào diễn ra từ tháng 2 đến tháng 5 năm 1971, là một phần của chiến lược tiêu diệt Đường Hồ Chí Minh của Mỹ.',
        significance: 'Hiện vật này thể hiện sự dũng cảm, kỹ năng quân sự và sự kiên trì của các chiến sĩ Việt Nam trong một chiến dịch quân sự cực kỳ khó khăn.'
    },
    {
        id: 7,
        title: 'Dao Găm Phi Công Mỹ',
        period: 'Chiến Tranh Việt Nam (Tháng 12/1972)',
        material: 'Thép, Nhôm',
        size: '30cm',
        time: 'Thế Kỷ 20',
        year: '1972',
        image: '../../assets/images/artifacts/knife-us.jpg',
        images: [
            '../../assets/images/artifacts/knife-us-1.jpg',
            '../../assets/images/artifacts/knife-us-2.jpg',
            '../../assets/images/artifacts/knife-us-3.jpg'
        ],
        video: '../../assets/videos/knife-us.mp4',
        videoDesc: 'Phim tài liệu về không quân Mỹ trong Chiến tranh Việt Nam',
        description: 'Dao găm của phi công Mỹ bị bắn rơi tại Hà Nội trong chiến dịch 12 ngày đêm, tháng 12/1972. Đây là vũ khí tự vệ cá nhân của các phi công Mỹ.',
        history: 'Chiến dịch 12 ngày đêm (Operation Linebacker II) là cuộc không kích mạnh nhất của Chiến tranh Việt Nam, diễn ra từ 18-29/12/1972 với quy mô rộng lớn chưa từng có.',
        significance: 'Hiện vật này là minh chứng sống động về cường độ, tàn khốc của cuộc chiến và sự quyết tâm bảo vệ đất nước của nhân dân Việt Nam.'
    },
    {
        id: 8,
        title: 'Bộ Quần Áo Bay Của Các Phi Công Việt Nam',
        period: 'Chiến Tranh Việt Nam (1997-2007)',
        material: 'Vải, Kim Loại',
        size: 'Vừa người',
        time: 'Thế Kỷ 20-21',
        year: '1997-2007',
        image: '../../assets/images/artifacts/pilot-suit.jpg',
        images: [
            '../../assets/images/artifacts/pilot-suit-1.jpg',
            '../../assets/images/artifacts/pilot-suit-2.jpg',
            '../../assets/images/artifacts/pilot-suit-3.jpg'
        ],
        video: '../../assets/videos/pilot-suit.mp4',
        videoDesc: 'Phim tài liệu về phi công Không quân Việt Nam',
        description: 'Bộ quần áo bay của Thượng tá Anh hùng Dương Văn Thanh, Phó Trung đoàn trưởng Trung đoàn 910, Trường sĩ quan Không quân, Quân chủng Phòng không - Không quân (PKKQ), mặc bay huấn luyện, đào tạo phi công, tháng 3/2002 đến tháng 4/2005. Bộ ở giữa là của Đại tá Đỗ Minh Tuấn, Sư đoàn trưởng Sư đoàn 371 huấn luyện phi công lái MIG-21 từ năm 2005 - 2007. Bộ quần áo bay màu xanh là của Đại tá Mai Văn Cương, Phó Tư lệnh Quân chủng PKKQ mặc bay kiểm tra, bay chỉ huy, bay huấn luyện trên MIG-21 và SU-22, năm 1997 đến 2002.',
        history: 'Các phi công Việt Nam đã huấn luyện và bay quân sự từ những năm 1997 đến 2007 với những chiếc máy bay quân sự hiện đại nhất thời bấy giờ.',
        significance: 'Những bộ quần áo này tượng trưng cho sự hi sinh, dũng cảm và tích cực của các phi công Việt Nam trong việc bảo vệ bầu trời Tổ quốc.'
    }
];

// Hàm mở modal artifact
function openArtifactModal(index) {
    const artifact = artifacts[index];
    
    document.getElementById('modalTitle').textContent = artifact.title;
    document.getElementById('modalPeriod').textContent = artifact.period;
    document.getElementById('modalMaterial').textContent = artifact.material;
    document.getElementById('modalSize').textContent = artifact.size;
    document.getElementById('modalTime').textContent = artifact.time;
    document.getElementById('modalYear').textContent = artifact.year;
    document.getElementById('modalDescription').textContent = artifact.description;
    document.getElementById('modalHistory').textContent = artifact.history;
    document.getElementById('modalSignificance').textContent = artifact.significance;
    
    document.getElementById('modalImage').src = artifact.image;
    document.getElementById('videoSource').src = artifact.video;
    document.getElementById('videoDesc').textContent = artifact.videoDesc;
    
    // Load gallery
    const gallery = document.getElementById('artifactGallery');
    gallery.innerHTML = artifact.images.map(img => 
        `<img src="${img}" class="gallery-item" onclick="changeMainImage('${img}')" alt="Gallery">`
    ).join('');

    // Reload video
    document.getElementById('modalVideo').load();

    document.getElementById('artifactModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Hàm đóng modal
function closeArtifactModal() {
    document.getElementById('artifactModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Đổi ảnh chính
function changeMainImage(src) {
    document.getElementById('modalImage').src = src;
}

// Quay lại
function goBack() {
    window.history.back();
}

// Đóng modal khi click overlay
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('artifactModal');
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeArtifactModal);
    }
});

// Keyboard close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArtifactModal();
    }
});
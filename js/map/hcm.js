const artifacts = [
    {
        title: 'Công Cụ Đá Mài',
        period: 'Thời Tiền Sa Huỳnh',
        material: 'Đá',
        size: '5-15cm',
        time: 'Thế Kỷ III-II TCN',
        year: '3000 năm trước',
        image: '../../assets/images/HCM/Picture27.png',
        images: ['../../assets/images/saigon/artifact1.jpg'],
        description: 'Các công cụ đá mài cho thấy cư dân cổ Việt Nam đang chuyển từ cuộc sống thu lượm sang sản xuất nông nghiệp.',
        history: 'Được sử dụng để xay ngũ cốc và hạt giống.',
        significance: 'Đánh dấu giai đoạn chuyển tiếp.',
        video: '../../assets/videos/artifact1.mp4'
    },
    {
        title: 'Tượng Người Múa Thế Kỷ X',
        period: 'Thế Kỷ X',
        material: 'Đất nung',
        size: '20cm',
        time: 'Thế Kỷ X',
        year: '1000 năm trước',
        image: '../../assets/images/HCM/Picture30.png',
        images: ['../../assets/images/saigon/artifact2.jpg'],
        description: 'Tượng người múa thể hiện đời sống văn hóa.',
        history: 'Tìm thấy tại các di tích thời Đại Việt.',
        significance: 'Chứng minh phát triển của nghệ thuật.',
        video: '../../assets/videos/artifact2.mp4'
    },
    {
        title: 'Trận Thủy Chiến Bạch Đằng',
        period: 'Năm 1288',
        material: 'Tư liệu lịch sử',
        size: 'N/A',
        time: 'Thế Kỷ XIII',
        year: '736 năm trước',
        image: '../../assets/images/HCM/Picture29.png',
        images: ['../../assets/images/saigon/artifact3.jpg'],
        description: 'Trận thủy chiến Bạch Đằng năm 1288.',
        history: 'Dưới sự chỉ huy của Trần Hưng Đạo.',
        significance: 'Khẳng định độc lập Việt Nam.',
        video: '../../assets/videos/artifact3.mp4'
    },
    {
        title: 'Triều Tiền Lê - Lê Hoàn',
        period: 'Năm 981',
        material: 'Tư liệu lịch sử',
        size: 'N/A',
        time: 'Thế Kỷ X',
        year: '1043 năm trước',
        image: '../../assets/images/HCM/Picture28.png',
        images: ['../../assets/images/saigon/artifact4.jpg'],
        description: 'Lê Hoàn lập ra triều Tiền Lê năm 981.',
        history: 'Thời kỳ huy hoàng của Việt Nam.',
        significance: 'Phát triển bền vững sau độc lập.',
        video: '../../assets/videos/artifact4.mp4'
    },
    {
        title: 'Hộp Đựng Sắc Phong Nguyễn',
        period: 'Triều Nguyễn',
        material: 'Gỗ phủ sơn',
        size: '30×20×15cm',
        time: 'Thế Kỷ XVIII-XIX',
        year: '200-300 năm trước',
        image: '../../assets/images/HCM/Picture31.png',
        images: ['../../assets/images/saigon/artifact5.jpg'],
        description: 'Hộp đựng sắc phong làm bằng gỗ phủ sơn.',
        history: 'Lưu giữ sắc phong hoàng đế.',
        significance: 'Thể hiện nền hành chính hoàng gia.',
        video: '../../assets/videos/artifact5.mp4'
    },
    {
        title: 'Bộ Sưu Tập Vương Hồng Sển',
        period: 'Triều Nguyễn',
        material: 'Đa dạng',
        size: 'N/A',
        time: 'Thế Kỷ XIX',
        year: '150-200 năm trước',
        image: '../../aassets/images/HCM/Picture33.png',
        images: ['../../assets/images/saigon/artifact6.jpg'],
        description: 'Tác phẩm quý báu từ Vương Hồng Sển.',
        history: 'Nhà sưu tập quan trọng triều Nguyễn.',
        significance: 'Sự yêu thích của các vị quan chức.',
        video: '../../assets/videos/artifact6.mp4'
    },
    {
        title: 'Khẩu Thần Công Ngoài Trời',
        period: 'Triều Nguyễn',
        material: 'Đồ thau, kim loại',
        size: '2m × 1.5m',
        time: 'Thế Kỷ XIX',
        year: '150-200 năm trước',
        image: '../../assets/images/saigon/artifact7.jpg',
        images: ['../../assets/images/saigon/artifact7.jpg'],
        description: 'Khẩu thần công công cụ chiến đấu quan trọng.',
        history: 'Bảo vệ Hoàng thành Huế.',
        significance: 'Sức mạnh quân sự triều Nguyễn.',
        video: '../../assets/videos/artifact7.mp4'
    },
    {
        title: 'Gốm Sứ Sa Huỳnh',
        period: 'Văn Hóa Sa Huỳnh',
        material: 'Gốm',
        size: '10-20cm',
        time: 'Thế Kỷ II TCN',
        year: '2000 năm trước',
        image: '../../assets/images/saigon/artifact8.jpg',
        images: ['../../assets/images/saigon/artifact8.jpg'],
        description: 'Những mảnh gốm thô Sa Huỳnh.',
        history: 'Sản phẩm gốm sớm nhất Đông Nam Á.',
        significance: 'Phát triển công nghệ gốm nung.',
        video: '../../assets/videos/artifact8.mp4'
    },
    {
        title: 'Đồ Trang Sức Sa Huỳnh',
        period: 'Văn Hóa Sa Huỳnh',
        material: 'Đồng, vàng',
        size: 'Đa dạng',
        time: 'Thế Kỷ II TCN',
        year: '2000 năm trước',
        image: '../../assets/images/saigon/artifact9.jpg',
        images: ['../../assets/images/saigon/artifact9.jpg'],
        description: 'Trang sức tinh xảo Sa Huỳnh.',
        history: 'Tìm thấy tại các tomb Sa Huỳnh.',
        significance: 'Kỹ thuật chế tác trang sức cao.',
        video: '../../assets/videos/artifact9.mp4'
    }
];

function openArtifactModal(index) {
    const artifact = artifacts[index];
    document.getElementById('modalTitle').textContent = artifact.title;
    document.getElementById('modalPeriod').textContent = artifact.period;
    document.getElementById('modalMaterial').textContent = artifact.material;
    document.getElementById('modalSize').textContent = artifact.size;
    document.getElementById('modalTime').textContent = artifact.time;
    document.getElementById('modalYear').textContent = artifact.year;
    document.getElementById('modalImage').src = artifact.image;
    document.getElementById('modalDescription').textContent = artifact.description;
    document.getElementById('modalHistory').textContent = artifact.history;
    document.getElementById('modalSignificance').textContent = artifact.significance;
    document.getElementById('videoSource').src = artifact.video;
    
    const gallery = document.getElementById('artifactGallery');
    gallery.innerHTML = artifact.images.map(img => 
        `<img src="${img}" alt="Gallery" onclick="changeMainImage('${img}')">`
    ).join('');
    
    document.getElementById('artifactModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function changeMainImage(src) {
    document.getElementById('modalImage').src = src;
}

function closeArtifactModal() {
    document.getElementById('artifactModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function goBack() {
    window.history.back();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArtifactModal();
    }
});
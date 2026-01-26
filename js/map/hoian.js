const artifacts = [
    {
        id: 1,
        title: 'Khuyên Tai 3 Mẫu',
        period: 'Văn Hóa Sa Huỳnh',
        material: 'Đồng, Vàng',
        size: '2-3cm',
        time: 'Thế Kỷ II-I TCN',
        year: '2000 năm trước',
        image: '../../assets/images/hoian/Picture21.png',
        images: ['../../assets/images/hoian/earrings-1.jpg', '../../assets/images/hoian/earrings-2.jpg', '../../assets/images/hoian/earrings-3.jpg'],
        video: '../../assets/videos/hoian-earrings.mp4',
        videoDesc: 'Phim tài liệu về các khuyên tai Sa Huỳnh',
        description: 'Bộ sưu tập khuyên tai gồm 3 mẫu khác nhau từ nền văn minh Sa Huỳnh, được chế tác công phu từ đồng và vàng. Mỗi chiếc đều thể hiện tỉ mỉ và tài năng của các nghệ nhân cổ đại.',
        history: 'Văn hóa Sa Huỳnh phát triển từ khoảng 2000 năm trước, là nền văn minh tiền Sa Huỳnh và Đại Việt cổ.',
        significance: 'Những khuyên tai này chứng minh trình độ chế tác kim loại và tẩm thẩm mỹ cao của người Sa Huỳnh.'
    },
    {
        id: 2,
        title: 'Dấu Triện',
        period: 'Thời Đại Việt',
        material: 'Đá, Đồng',
        size: '5cm × 5cm',
        time: 'Thế Kỷ X-XV',
        year: '1000 năm trước',
        image: '../../assets/images/hoian/Picture22.png',
        images: ['../../assets/images/hoian/seal-1.jpg', '../../assets/images/hoian/seal-2.jpg', '../../assets/images/hoian/seal-3.jpg'],
        video: '../../assets/videos/hoian-seal.mp4',
        videoDesc: 'Phim tài liệu về dấu triện thời Đại Việt',
        description: 'Dấu triện là công cụ quản lý hành chính quan trọng của triều đại Đại Việt. Được chế tác từ đá hoặc đồng, dấu triện thể hiện quyền lực và thẩm quyền của chủ sở hữu.',
        history: 'Dấu triện được sử dụng rộng rãi từ thời Đại Việt, là biểu tượng của quyền hành và sự phê chuẩn chính thức.',
        significance: 'Hiện vật này giúp hiểu rõ hơn về hệ thống hành chính và tổ chức quản lý của Đại Việt cổ.'
    },
    {
        id: 3,
        title: 'Hiện Vật Gốm Từ Tàu Đắm',
        period: 'Cù Lao Chàm',
        material: 'Gốm',
        size: 'Khác nhau',
        time: 'Thế Kỷ XIV-XVII',
        year: '600-900 năm trước',
        image: '../../assets/images/hoian/Picture23.png',
        images: ['../../assets/images/hoian/ceramic-1.jpg', '../../assets/images/hoian/ceramic-2.jpg', '../../assets/images/hoian/ceramic-3.jpg'],
        video: '../../assets/videos/hoian-ceramic.mp4',
        videoDesc: 'Phim tài liệu về những tàu đắm Cù Lao Chàm',
        description: 'Những hiện vật gốm khai quật từ tàu đắm Cù Lao Chàm, chứng minh sự phát triển của con đường thương mại biển trong lịch sử Việt Nam. Các mảnh gốm được tìm thấy ở độ sâu hàng chục mét dưới lòng biển.',
        history: 'Những tàu đắm này cho thấy hoạt động thương mại sôi động giữa các cảng của Đông Nam Á từ thế kỷ XIV trở đi.',
        significance: 'Các hiện vật này là bằng chứng quý báu về lịch sử hàng hải và thương mại quốc tế của Việt Nam.'
    },
    {
        id: 4,
        title: 'Đĩa Sứ Hizen',
        period: 'Nhật Bản Thế Kỷ XVII (Mẫu 1)',
        material: 'Sứ',
        size: '30-35cm',
        time: 'Thế Kỷ XVII',
        year: '400 năm trước',
        image: '../../assets/images/hoian/Picture19.png',
        images: ['../../assets/images/hoian/porcelain1-1.jpg', '../../assets/images/hoian/porcelain1-2.jpg', '../../assets/images/hoian/porcelain1-3.jpg'],
        video: '../../assets/videos/hoian-porcelain1.mp4',
        videoDesc: 'Phim tài liệu về sứ Hizen từ Nhật Bản',
        description: 'Đĩa sứ Hizen từ Nhật Bản là sản phẩm mến khách của thương mại Đông Nam Á thế kỷ 17. Được chế tác với kỹ thuật cao, mỗi chiếc đĩa đều có giá trị nghệ thuật cao.',
        history: 'Sứ Hizen được sản xuất ở vùng Hizen của Nhật Bản, trở thành hàng hóa mục tiêu của thương nhân Hội An.',
        significance: 'Những đĩa sứ này chứng tỏ quan hệ thương mại và văn hóa sôi động giữa Việt Nam và Nhật Bản.'
    },
    {
        id: 5,
        title: 'Đĩa Sứ Hizen (Mẫu 2)',
        period: 'Nhật Bản Thế Kỷ XVII',
        material: 'Sứ',
        size: '28-32cm',
        time: 'Thế Kỷ XVII',
        year: '400 năm trước',
        image: '../../assets/images/hoian/Picture20.png',
        images: ['../../assets/images/hoian/porcelain2-1.jpg', '../../assets/images/hoian/porcelain2-2.jpg', '../../assets/images/hoian/porcelain2-3.jpg'],
        video: '../../assets/videos/hoian-porcelain2.mp4',
        videoDesc: 'Phim tài liệu về sứ Hizen - Mẫu 2',
        description: 'Một trong những mẫu đĩa sứ quý hiếm nhất trong bộ sưu tập, được trang trí tinh xảo và có chất lượng sứ tuyệt vời.',
        history: 'Mẫu đĩa này thể hiện đỉnh cao của kỹ thuật chế tác sứ Hizen trong thế kỷ 17.',
        significance: 'Đây là minh chứng của sự xuất sắc trong giao thương và trao đổi văn hóa giữa các quốc gia.'
    },
    {
        id: 6,
        title: 'Đồ Trang Sức Sa Huỳnh',
        period: 'Văn Hóa Sa Huỳnh',
        material: 'Đồng, Vàng, Xà cừ',
        size: 'Khác nhau',
        time: 'Thế Kỷ II-I TCN',
        year: '2000 năm trước',
        image: '../../assets/images/hoian/Picture24.png',
        images: ['../../assets/images/hoian/jewelry-1.jpg', '../../assets/images/hoian/jewelry-2.jpg', '../../assets/images/hoian/jewelry-3.jpg'],
        video: '../../assets/videos/hoian-jewelry.mp4',
        videoDesc: 'Phim tài liệu về đồ trang sức Sa Huỳnh',
        description: 'Trang sức từ văn hóa Sa Huỳnh, được chế tác công phu từ 2000 năm trước. Mỗi chiếc trang sức đều là tác phẩm đẹp đẽ, thể hiện thẩm mỹ và tài năng của người Sa Huỳnh.',
        history: 'Nền văn minh Sa Huỳnh phát triển mạnh mẽ, tạo ra những trang sức cực kỳ tinh tế.',
        significance: 'Những trang sức này cho thấy sự giàu có, ranh mạnh và khéo léo của người Sa Huỳnh.'
    },
    {
        id: 7,
        title: 'Hiện Vật Tiền Sa Huỳnh',
        period: 'Bãi Ông - Cù Lao Chàm',
        material: 'Gốm, Đồng',
        size: 'Khác nhau',
        time: 'Thế Kỷ III-II TCN',
        year: '3000 năm trước',
        image: '../../assets/images/hoian/Picture25.png',
        images: ['../../assets/images/hoian/ancient-artifact-1.jpg', '../../assets/images/hoian/ancient-artifact-2.jpg', '../../assets/images/hoian/ancient-artifact-3.jpg'],
        video: '../../assets/videos/hoian-ancient.mp4',
        videoDesc: 'Phim tài liệu về những hiện vật Tiền Sa Huỳnh',
        description: 'Những hiện vật từ thời Tiền Sa Huỳnh, cách ngày nay khoảng 3000 năm, được khai quật tại di chỉ Bãi Ông ở Cù Lao Chàm. Đây là những bằng chứng quan trọng về sự phát triển của nhân loại ở Việt Nam.',
        history: 'Thời Tiền Sa Huỳnh là giai đoạn đầu tiên của những cộng đồng cư trú ở Việt Nam, với các hoạt động sản xuất và sinh hoạt cơ bản.',
        significance: 'Những hiện vật này là những bằng chứng sống động nhất về lịch sử tiền sử Việt Nam.'
    },
    {
        id: 8,
        title: 'Mô Hình Múa Thiên Cẩu Gian',
        period: 'Sinh Hoạt Truyền Thống Hội An',
        material: 'Gỗ, Vải, Sơn',
        size: '150cm × 200cm',
        time: 'Thế Kỷ XX-XXI',
        year: 'Hiện đại',
        image: '../../assets/images/hoian/Picture15.png',
        images: ['../../assets/images/hoian/puppet-1.jpg', '../../assets/images/hoian/puppet-2.jpg', '../../assets/images/hoian/puppet-3.jpg'],
        video: '../../assets/videos/hoian-puppet.mp4',
        videoDesc: 'Phim tài liệu về múa rối truyền thống Hội An',
        description: 'Mô hình múa Thiên Cẩu Gian là tái hiện sinh hoạt, lễ hội truyền thống của cộng đồng Hội An. Thông qua những con rối, khán giả có thể hiểu rõ về đời sống xưa của Hội An.',
        history: 'Múa rối là một hình thức biểu diễn nghệ thuật truyền thống của Hội An, gắn liền với các lễ hội và hoạt động cộng đồng.',
        significance: 'Mô hình này giúp bảo tồn và truyền dạy các giá trị văn hóa truyền thống cho thế hệ sau.'
    },
    {
        id: 9,
        title: 'Bộ Nhạc Cụ Cổ Truyền',
        period: 'Âm Nhạc Truyền Thống Việt',
        material: 'Gỗ, Tre, Dây',
        size: 'Khác nhau',
        time: 'Thế Kỷ XX-XXI',
        year: 'Truyền thống',
        image: '../../assets/images/hoian/Picture16.png',
        images: ['../../assets/images/hoian/instruments-1.jpg', '../../assets/images/hoian/instruments-2.jpg', '../../assets/images/hoian/instruments-3.jpg'],
        video: '../../assets/videos/hoian-instruments.mp4',
        videoDesc: 'Phim tài liệu về nhạc cụ truyền thống Việt Nam',
        description: 'Tập hợp các nhạc cụ truyền thống bao gồm đàn tranh, đàn tầm vông, sáo mũi, chuông, trống... Mỗi chiếc đều là tác phẩm của những nghệ nhân kỳ cựu.',
        history: 'Các nhạc cụ này đã được sử dụng trong âm nhạc truyền thống Việt Nam từ hàng ngàn năm nay.',
        significance: 'Những nhạc cụ này là kho tàng quý báu của nền âm nhạc Việt Nam, giữ gìn bản sắc văn hóa dân tộc.'
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
    document.getElementById('modalDescription').textContent = artifact.description;
    document.getElementById('modalHistory').textContent = artifact.history;
    document.getElementById('modalSignificance').textContent = artifact.significance;
    document.getElementById('modalImage').src = artifact.image;
    document.getElementById('videoSource').src = artifact.video;
    document.getElementById('videoDesc').textContent = artifact.videoDesc;
    
    const gallery = document.getElementById('artifactGallery');
    gallery.innerHTML = artifact.images.map(img => 
        `<img src="${img}" class="gallery-item" onclick="changeMainImage('${img}')" alt="Gallery">`
    ).join('');
    
    document.getElementById('modalVideo').load();
    document.getElementById('artifactModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeArtifactModal() {
    document.getElementById('artifactModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function changeMainImage(src) {
    document.getElementById('modalImage').src = src;
}

function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) overlay.addEventListener('click', closeArtifactModal);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArtifactModal();
});

function toggleSound() {
    const video = document.getElementById('heroVideo');
    if (!video) {
        console.log('Không tìm thấy heroVideo');
        return;
    }

    // Bật / tắt tiếng
    video.muted = !video.muted;

    // Đổi icon (an toàn)
    const icon = document.querySelector('.sound-icon');
    if (icon) {
        icon.textContent = video.muted ? '🔇' : '🔊';
    }

    // Chrome cần play lại sau tương tác
    if (!video.muted) {
        video.play().catch(err => {
            console.log('Không play được:', err);
        });
    }
}



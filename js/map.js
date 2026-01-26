// Dữ liệu bảo tàng
const museums = {
    hanoi: {
        name: 'Bảo Tàng Lịch Sử Quân Sự Việt Nam',
        lat: 21.0285,
        lng: 105.8581,
        location: '28 Đ. Đức Thắng, Bắc Từ Liêm, Hà Nội',
        color: '#c41e3a',
        page: 'locations/hanoi.html'
    },
    hoian: {
        name: 'Bảo Tàng Lịch Sử Văn Hóa Hội An',
        lat: 15.8795,
        lng: 108.3261,
        location: '10B Trần Hưng Đạo, Hội An',
        color: '#1e90ff',
        page: 'locations/hoian.html'
    },
    hcm: {
        name: 'Bảo Tàng Chiến Tranh Chứng Tích',
        lat: 10.7769,
        lng: 106.6826,
        location: '28 Võ Văn Tần, Quận 3, TP.HCM',
        color: '#ffa500',
        page: 'locations/saigon.html'
    }
};

// Khởi tạo bản đồ
let map;
let markers = [];
let selectedMuseum = null;

function initMap() {
    // Tạo bản đồ với center tại Việt Nam
    map = L.map('map').setView([16, 106], 5);

    // Thêm tile layer từ OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Thêm markers cho các bảo tàng
    Object.keys(museums).forEach(key => {
        const museum = museums[key];
        
        // Tạo custom HTML icon
        const customIcon = L.divIcon({
            html: `
                <div class="custom-marker" style="background-color: ${museum.color};">
                    <i class="fas fa-map-pin"></i>
                </div>
            `,
            iconSize: [45, 45],
            iconAnchor: [22, 45],
            popupAnchor: [1, -34],
            className: 'custom-marker-icon'
        });

        const marker = L.marker([museum.lat, museum.lng], { icon: customIcon }).addTo(map);

        // Popup khi hover
        marker.bindPopup(`
            <div class="marker-popup">
                <strong>${museum.name}</strong><br>
                <small>${museum.location}</small><br>
                <button class="popup-btn" onclick="goToMuseum('${key}')">
                    Xem Chi Tiết →
                </button>
            </div>
        `, {
            className: 'custom-popup',
            closeButton: true
        });

        // Click marker để xem thông tin
        marker.on('click', () => {
            showMuseumInfo(key);
        });

        markers.push({ key, marker, museum });
    });
}

// Hiển thị thông tin bảo tàng trong side panel
function showMuseumInfo(museumKey) {
    selectedMuseum = museumKey;
    const museum = museums[museumKey];

    const content = document.getElementById('museumContent');
    content.innerHTML = `
        <div class="museum-detail-panel">
            <div class="museum-header">
                <h3>${museum.name}</h3>
                <span class="museum-status">• Đang hoạt động</span>
            </div>

            <div class="museum-info-section">
                <h4><i class="fas fa-map-marker-alt"></i> Địa Chỉ</h4>
                <p>${museum.location}</p>
            </div>

            <div class="museum-info-section">
                <h4><i class="fas fa-clock"></i> Giờ Mở Cửa</h4>
                <p>Thứ 2 - Chủ Nhật: 8:00 - 17:00</p>
                <p style="font-size: 0.9rem; color: #999;">Đóng cửa vào các ngày lễ quốc gia</p>
            </div>

            <div class="museum-info-section">
                <h4><i class="fas fa-info-circle"></i> Mô Tả</h4>
                <p>${getMuseumDescription(museumKey)}</p>
            </div>

            <div class="museum-info-section">
                <h4><i class="fas fa-ticket-alt"></i> Vé Vào Cửa</h4>
                <p>Người lớn: 50.000 VND</p>
                <p>Học sinh/Sinh viên: 25.000 VND</p>
                <p>Trẻ em dưới 12 tuổi: Miễn phí</p>
            </div>

            <div class="museum-actions">
                <button class="btn btn-primary-lg" onclick="goToMuseum('${museumKey}')">
                    <i class="fas fa-arrow-right"></i>
                    Xem Thêm Chi Tiết
                </button>
                <button class="btn btn-outline-lg" onclick="openGoogleMaps('${museum.lat}', '${museum.lng}')">
                    <i class="fas fa-directions"></i>
                    Chỉ Đường
                </button>
            </div>

            <div class="museum-contact">
                <h4><i class="fas fa-headset"></i> Liên Hệ</h4>
                <p><i class="fas fa-phone"></i> 1900 xxxx</p>
                <p><i class="fas fa-envelope"></i> info@baotanglichsu.vn</p>
            </div>
        </div>
    `;

    // Mở panel trên mobile
    if (window.innerWidth < 768) {
        openPanel();
    }
}

// Lấy mô tả bảo tàng
function getMuseumDescription(museumKey) {
    const descriptions = {
        hanoi: 'Bảo Tàng Lịch Sử Quân Sự Việt Nam trưng bày các hiện vật từ các chiến dịch quân sự, vũ khí, trang phục lịch sử, tài liệu quý về những chiến công của dân tộc Việt Nam.',
        hoian: 'Bảo Tàng Lịch Sử Văn Hóa Hội An lưu giữ các hiện vật văn hóa quý báu, gốm sứ cổ, trang phục truyền thống, và các công trình thủ công truyền thống của Việt Nam.',
        hcm: 'Bảo Tàng Chiến Tranh Chứng Tích kỷ niệm các giai đoạn lịch sử quan trọng, trưng bày những hiện vật từ các thời kỳ lịch sử khác nhau của đất nước.'
    };
    return descriptions[museumKey] || 'Bảo tàng lịch sử Việt Nam';
}

// Chuyển sang trang chi tiết bảo tàng
function goToMuseum(museumKey) {
    const museum = museums[museumKey];
    window.location.href = museum.page;
}

// Mở Google Maps
function openGoogleMaps(lat, lng) {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
}

// Tìm kiếm bảo tàng
function searchMuseums() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const clearBtn = document.getElementById('clearSearch');

    if (searchInput) {
        clearBtn.style.display = 'inline-block';
    } else {
        clearBtn.style.display = 'none';
    }

    markers.forEach(({ key, marker, museum }) => {
        const matchName = museum.name.toLowerCase().includes(searchInput);
        const matchLocation = museum.location.toLowerCase().includes(searchInput);

        if (matchName || matchLocation) {
            marker.setOpacity(1);
        } else {
            marker.setOpacity(0.3);
        }
    });
}

// Xóa tìm kiếm
function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';

    markers.forEach(({ marker }) => {
        marker.setOpacity(1);
    });
}

// Mở/Đóng side panel trên mobile
function togglePanel() {
    const panel = document.querySelector('.museum-panel');
    panel.classList.toggle('open');
}

function openPanel() {
    document.querySelector('.museum-panel').classList.add('open');
}

function closePanel() {
    document.querySelector('.museum-panel').classList.remove('open');
}

// Khởi tạo bản đồ khi trang load
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    
    // Đóng panel khi click vào bản đồ trên mobile
    if (window.innerWidth < 768) {
        document.getElementById('map').addEventListener('click', closePanel);
    }
});

// Handle responsive
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.querySelector('.museum-panel').classList.remove('open');
    }
});
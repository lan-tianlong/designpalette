/**
 * DesignPalette - 室内设计配色与材质工具集
 * MIT License
 */

// ===== 配色数据库 =====
const PALETTE_DB = {
    'modern-minimalist': {
        name: '现代极简',
        palettes: [
            {
                name: '纯净白灰',
                colors: [
                    { hex: '#F5F5F5', name: '纯白', usage: '墙面主色' },
                    { hex: '#E0E0E0', name: '浅灰', usage: '柜体/天花' },
                    { hex: '#9E9E9E', name: '中灰', usage: '地面/金属' },
                    { hex: '#424242', name: '深灰', usage: '线条/收边' },
                    { hex: '#212121', name: '墨黑', usage: '点缀/灯具' },
                ],
                mood: '冷静克制，空间延伸感强'
            },
            {
                name: '暖灰木色',
                colors: [
                    { hex: '#FAF8F5', name: '奶白', usage: '墙面主色' },
                    { hex: '#D7CCC8', name: '暖灰', usage: '沙发/布艺' },
                    { hex: '#8D6E63', name: '胡桃木', usage: '地板/家具' },
                    { hex: '#5D4037', name: '深咖', usage: '边框/装饰' },
                    { hex: '#FFCC80', name: '暖橙', usage: '靠垫/挂画' },
                ],
                mood: '温暖沉稳，质感丰富'
            },
            {
                name: '黑白对比',
                colors: [
                    { hex: '#FFFFFF', name: '纯白', usage: '墙面/天花' },
                    { hex: '#F5F5F5', name: '米白', usage: '大面积基底' },
                    { hex: '#757575', name: '过渡灰', usage: '窗帘/地毯' },
                    { hex: '#212121', name: '炭黑', usage: '家具主色' },
                    { hex: '#FF5722', name: '亮橙', usage: '视觉焦点' },
                ],
                mood: '戏剧张力，现代感十足'
            },
        ]
    },
    'nordic': {
        name: '北欧自然',
        palettes: [
            {
                name: '白桦林',
                colors: [
                    { hex: '#FAFAFA', name: '雪白', usage: '墙面基底' },
                    { hex: '#E8E0D5', name: '原木白', usage: '家具主色' },
                    { hex: '#A5D6A7', name: '薄荷绿', usage: '绿植/布艺' },
                    { hex: '#78909C', name: '灰蓝', usage: '沙发/窗帘' },
                    { hex: '#FFE082', name: '鹅黄', usage: '灯光/饰品' },
                ],
                mood: '清新通透，与自然共生'
            },
            {
                name: '森林氧吧',
                colors: [
                    { hex: '#E8F5E9', name: '浅绿底', usage: '墙面' },
                    { hex: '#A5D6A7', name: '草绿', usage: '窗帘/抱枕' },
                    { hex: '#66BB6A', name: '翠绿', usage: '植物点缀' },
                    { hex: '#795548', name: '棕木', usage: '地板/桌椅' },
                    { hex: '#FFCC02', name: '明黄', usage: '装饰/灯具' },
                ],
                mood: '生机盎然，亲近自然'
            },
        ]
    },
    'japanese-wabi': {
        name: '日式侘寂',
        palettes: [
            {
                name: '禅意米灰',
                colors: [
                    { hex: '#F5F0EB', name: '米色', usage: '墙面/榻榻米' },
                    { hex: '#D7CCC8', name: '灰米', usage: '障子/布艺' },
                    { hex: '#8D6E63', name: '木色', usage: '柱/梁/家具' },
                    { hex: '#616161', name: '深灰', usage: '石材/铁器' },
                    { hex: '#388E3C', name: '苔绿', usage: '盆栽/茶器' },
                ],
                mood: '静寂之美，时光沉淀'
            },
        ]
    },
    'industrial-loft': {
        name: '工业Loft',
        palettes: [
            {
                name: '混凝土灰',
                colors: [
                    { hex: '#CFD8DC', name: '水泥灰', usage: '墙面/天花' },
                    { hex: '#607D8B', name: '钢板蓝', usage: '金属构件' },
                    { hex: '#795548', name: '锈棕', usage: '砖墙/管道' },
                    { hex: '#37474F', name: '铁黑', usage: '灯具/框架' },
                    { hex: '#FFAB40', name: '琥珀', usage: '皮具/灯光' },
                ],
                mood: '粗犷质感，工业美学'
            },
        ]
    },
    'luxury-modern': {
        name: '轻奢现代',
        palettes: [
            {
                name: '香槟金配',
                colors: [
                    { hex: '#FAFAFA', name: '奶油白', usage: '墙面/天花' },
                    { hex: '#CFD8DC', name: '银灰', usage: '丝绒/地毯' },
                    { hex: '#C5A572', name: '香槟金', usage: '五金/装饰' },
                    { hex: '#2C3E50', name: '深蓝', usage: '沙发/窗帘' },
                    { hex: '#8E44AD', name: '帝王紫', usage: '抱枕/花艺' },
                ],
                mood: '优雅高级，细节见品位'
            },
        ]
    },
    'mediterranean': {
        name: '地中海风情',
        palettes: [
            {
                name: '圣托里尼',
                colors: [
                    { hex: '#FFFFFF', name: '纯白', usage: '墙面/拱门' },
                    { hex: '#42A5F5', name: '海蓝', usage: '门窗/瓷砖' },
                    { hex: '#F5DEB3', name: '沙色', usage: '地面/石材' },
                    { hex: '#FF7043', name: '珊瑚橘', usage: '饰品/花盆' },
                    { hex: '#66BB6A', name: '橄榄绿', usage: '绿植/庭院' },
                ],
                mood: '阳光海风，浪漫悠闲'
            },
        ]
    },
    'new-chinese': {
        name: '新中式',
        palettes: [
            {
                name: '水墨丹青',
                colors: [
                    { hex: '#F5F0EB', name: '宣纸白', usage: '墙面' },
                    { hex: '#D4A574', name: '檀木棕', usage: '家具/屏风' },
                    { hex: '#2C3E50', name: '墨色', usage: '线条/画框' },
                    { hex: '#C0392B', name: '朱砂红', usage: '靠垫/瓷器' },
                    { hex: '#7D8B6F', name: '竹青', usage: '绿植/茶席' },
                ],
                mood: '东方底蕴，简而不凡'
            },
        ]
    },
    'mid-century': {
        name: '中古复古',
        palettes: [
            {
                name: '柚木年代',
                colors: [
                    { hex: '#FDF5E6', name: '奶油底', usage: '墙面' },
                    { hex: '#D2691E', name: '柚木棕', usage: '家具主色' },
                    { hex: '#556B2F', name: '橄榄绿', usage: '沙发/窗帘' },
                    { hex: '#CD853F', name: '橘棕', usage: '抱枕/地毯' },
                    { hex: '#2F4F4F', name: '暗青', usage: '装饰线/画框' },
                ],
                mood: '复古温度，时光质感'
            },
        ]
    },
};

// ===== 材质数据库 =====
const MATERIAL_DB = {
    'living-room': {
        economic: [
            { name: '复合地板 + 乳胶漆', desc: '浅色复合地板搭配白色乳胶漆墙面，经济实用', tags: ['复合地板', '乳胶漆', '经济'], icon: '🏠' },
            { name: '强化地板 + 墙纸', desc: '强化木地板 + PVC墙纸，性价比之选', tags: ['强化地板', 'PVC墙纸'], icon: '🏠' },
            { name: '瓷砖 + 肌理漆', desc: '大规格瓷砖地面，肌理漆墙面有质感', tags: ['瓷砖', '肌理漆'], icon: '🏠' },
        ],
        'mid-range': [
            { name: '实木复合 + 艺术漆', desc: '橡木实木复合地板，配艺术涂料墙面', tags: ['实木复合', '艺术漆'], icon: '🛋️' },
            { name: '大理石瓷砖 + 护墙板', desc: '仿大理石纹瓷砖 + 简约护墙板', tags: ['大理石纹', '护墙板'], icon: '🛋️' },
            { name: 'SPC地板 + 微水泥', desc: 'SPC锁扣地板搭配微水泥墙面，现代感强', tags: ['SPC', '微水泥'], icon: '🛋️' },
        ],
        luxury: [
            { name: '实木地板 + 大理石', desc: '北美黑胡桃实木地板 + 天然大理石背景墙', tags: ['黑胡桃', '大理石', '高级'], icon: '✨' },
            { name: '人字拼木地板 + 岩板', desc: '橡木人字拼地板 + 进口岩板电视墙', tags: ['人字拼', '岩板', '进口'], icon: '✨' },
            { name: '鱼骨拼 + 真皮硬包', desc: '柚木鱼骨拼 + 意大利真皮硬包墙面', tags: ['鱼骨拼', '真皮', '意式'], icon: '✨' },
        ],
    },
    'bedroom': {
        economic: [
            { name: '复合地板 + 乳胶漆', desc: '暖色调复合地板，米色乳胶漆温馨舒适', tags: ['复合', '乳胶漆'], icon: '🛏️' },
            { name: '地毯 + 墙布', desc: '满铺地毯 + 无缝墙布，隔音保暖', tags: ['地毯', '墙布'], icon: '🛏️' },
        ],
        'mid-range': [
            { name: '实木复合 + 软包', desc: '实木复合地板 + 床头布艺软包背景', tags: ['实木复合', '布艺软包'], icon: '🛏️' },
            { name: 'SPC + 格栅板', desc: 'SPC地板 + 木格栅背景墙，层次丰富', tags: ['SPC', '格栅'], icon: '🛏️' },
        ],
        luxury: [
            { name: '实木 + 硬包 + 地毯', desc: '实木地板 + 皮质硬包床头 + 羊毛地毯', tags: ['实木', '真皮硬包', '羊毛'], icon: '✨' },
        ],
    },
    'kitchen': {
        economic: [
            { name: '防滑砖 + 防火板', desc: '防滑地砖 + 防火板橱柜，实用安全', tags: ['防滑', '防火板'], icon: '🍳' },
        ],
        'mid-range': [
            { name: '通体砖 + 石英石台面', desc: '通体砖地面 + 石英石台面 + 吸塑门板', tags: ['通体砖', '石英石'], icon: '🍳' },
        ],
        luxury: [
            { name: '大理石 + 岩板岛台', desc: '天然大理石地面 + 岩板岛台 + 实木橱柜', tags: ['大理石', '岩板', '实木'], icon: '✨' },
        ],
    },
    'bathroom': {
        economic: [
            { name: '釉面砖 + 铝扣板', desc: '白色釉面瓷砖 + 铝扣板吊顶，干净明亮', tags: ['釉面砖', '铝扣板'], icon: '🚿' },
        ],
        'mid-range': [
            { name: '柔光砖 + 防水石膏板', desc: '柔光系列瓷砖 + 防水石膏板吊顶', tags: ['柔光砖', '石膏板'], icon: '🚿' },
        ],
        luxury: [
            { name: '微水泥 + 大理石', desc: '无缝微水泥 + 大理石台面 + 智能镜柜', tags: ['微水泥', '大理石', '智能'], icon: '✨' },
        ],
    },
    'study': {
        economic: [
            { name: '复合地板 + 乳胶漆', desc: '深色复合地板 + 浅灰乳胶漆，专注氛围', tags: ['复合', '乳胶漆'], icon: '📚' },
        ],
        'mid-range': [
            { name: '实木复合 + 书柜定制', desc: '实木复合地板 + 定制实木贴皮书柜', tags: ['实木复合', '定制'], icon: '📚' },
        ],
        luxury: [
            { name: '实木 + 真皮 + 护墙板', desc: '橡木地板 + 真皮阅读椅 + 胡桃木护墙板书架', tags: ['橡木', '真皮', '护墙板'], icon: '✨' },
        ],
    },
    'dining': {
        economic: [
            { name: '瓷砖 + 乳胶漆', desc: '仿木纹瓷砖 + 奶咖色乳胶漆，温馨就餐', tags: ['瓷砖', '乳胶漆'], icon: '🍽️' },
        ],
        'mid-range': [
            { name: '实木复合 + 餐边柜', desc: '实木复合地板 + 定制餐边柜 + 长虹玻璃', tags: ['实木复合', '长虹玻璃'], icon: '🍽️' },
        ],
        luxury: [
            { name: '大理石 + 水晶吊灯', desc: '大理石地面 + 胡桃木餐桌 + 水晶吊灯', tags: ['大理石', '胡桃木', '水晶'], icon: '✨' },
        ],
    },
};

// ===== 当前状态 =====
let currentPalette = null;
let selectedColors = [];
let activeTab = 'palette';

// ===== Tab 切换 =====
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        activeTab = tab.dataset.tab;
        document.getElementById(activeTab).classList.add('active');
    });
});

// ===== 配色生成 =====
document.getElementById('generate-palette').addEventListener('click', () => {
    const style = document.getElementById('style-select').value;
    const styleData = PALETTE_DB[style];
    const randomPalette = styleData.palettes[Math.floor(Math.random() * styleData.palettes.length)];

    currentPalette = randomPalette;
    selectedColors = [];

    renderPalette(randomPalette);
    renderPaletteInfo(randomPalette, styleData.name);
    renderPreview();
});

// 渲染色块
function renderPalette(palette) {
    const display = document.getElementById('palette-display');
    display.innerHTML = palette.colors.map((c, i) => `
        <div class="color-swatch" data-index="${i}" onclick="selectColor(${i})">
            <div class="color-block" style="background: ${c.hex};">
                <span class="color-hex">${c.hex}</span>
            </div>
            <div class="color-info">
                <div class="color-name">${c.name}</div>
                <div class="color-usage">${c.usage}</div>
            </div>
        </div>
    `).join('');
}

// 渲染配色信息
function renderPaletteInfo(palette, styleName) {
    const infoDiv = document.getElementById('palette-info');
    infoDiv.classList.remove('hidden');
    infoDiv.querySelector('.info-grid').innerHTML = `
        <div class="info-item">
            <span class="info-label">风格定位</span>
            <span class="info-value">${styleName}</span>
        </div>
        <div class="info-item">
            <span class="info-label">配色名称</span>
            <span class="info-value">${palette.name}</span>
        </div>
        <div class="info-item">
            <span class="info-label">氛围基调</span>
            <span class="info-value">${palette.mood}</span>
        </div>
        <div class="info-item">
            <span class="info-label">主色</span>
            <span class="info-value" style="color: ${palette.colors[0].hex}">${palette.colors[0].hex}</span>
        </div>
        <div class="info-item">
            <span class="info-label">点缀色</span>
            <span class="info-value" style="color: ${palette.colors[4].hex}">${palette.colors[4].hex}</span>
        </div>
    `;
}

// 选中颜色
window.selectColor = function(index) {
    if (selectedColors.includes(index)) {
        selectedColors = selectedColors.filter(i => i !== index);
    } else {
        selectedColors.push(index);
    }
    document.querySelectorAll('.color-swatch').forEach((swatch, i) => {
        swatch.classList.toggle('selected', selectedColors.includes(i));
    });
    renderPreview();
};

// ===== 材质方案 =====
document.getElementById('generate-material').addEventListener('click', () => {
    const room = document.getElementById('room-select').value;
    const budget = document.getElementById('budget-select').value;

    const roomData = MATERIAL_DB[room];
    if (!roomData) return;

    const budgets = budget === 'economic' ? [roomData.economic] :
                    budget === 'mid-range' ? [roomData.economic, roomData['mid-range']] :
                    [roomData.economic, roomData['mid-range'], roomData.luxury];

    const allMaterials = budgets.flat();

    const display = document.getElementById('material-display');
    display.innerHTML = allMaterials.map(m => {
        const budgetLabel = m.tags.length > 0 ?
            (m.tags.includes('高级') || m.tags.includes('大理石') || m.tags.includes('实木') || m.tags.includes('进口') ? '高档' :
             m.tags.includes('SPC') || m.tags.includes('艺术漆') || m.tags.includes('实木复合') || m.tags.includes('微水泥') ? '中档' :
             '经济') : '';
        return `
        <div class="material-card">
            <div class="material-icon">${m.icon}</div>
            <div class="material-name">${m.name}</div>
            <div class="material-desc">${m.desc}</div>
            <div class="material-tags">
                ${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                ${budgetLabel ? `<span class="tag price">${budgetLabel}</span>` : ''}
            </div>
        </div>
    `}).join('');
});

// ===== 场景预览 =====
function renderPreview() {
    const canvas = document.getElementById('preview-canvas');

    if (!currentPalette) {
        canvas.innerHTML = '<div class="palette-empty"><p>先生成配色方案，然后在此预览</p></div>';
        return;
    }

    const colors = currentPalette.colors;
    canvas.innerHTML = `
        <div class="room-preview">
            <div class="room-wall" style="background: ${colors[0].hex};"></div>
            <div class="room-floor" style="background: ${colors[2].hex};">
                <div class="room-label">
                    <div style="font-size: 0.9rem; color: ${isLight(colors[2].hex) ? '#333' : '#eee'};">
                        ${currentPalette.name} · ${colors[0].name} + ${colors[2].name}
                    </div>
                    <div style="font-size: 0.75rem; opacity: 0.7; margin-top: 0.5rem; color: ${isLight(colors[2].hex) ? '#333' : '#eee'};">
                        墙面 ${colors[0].hex} | 地面 ${colors[2].hex} | 点缀 ${colors[4].hex}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 判断颜色深浅
function isLight(hex) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 150;
}

// ===== 初始化：随机加载一个配色 =====
document.addEventListener('DOMContentLoaded', () => {
    // 默认加载现代极简风格
    const defaultStyle = PALETTE_DB['modern-minimalist'];
    const defaultPalette = defaultStyle.palettes[0];
    currentPalette = defaultPalette;
    renderPalette(defaultPalette);
    renderPaletteInfo(defaultPalette, defaultStyle.name);
    renderPreview();
});

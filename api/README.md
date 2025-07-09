# API Modülü - Backend Servisi

**BACKEND TEAM**: FastAPI ile RESTful API geliştirin! 🚀

## 📋 Görevleriniz

### 1. Core Endpoints
- `main.py` dosyasındaki endpoint'leri implement edin
- `/trends` - Trend analizi servisi
- `/salary` - Maaş tahmin servisi
- `/health` - Health check

### 2. Database Integration
- TimescaleDB ve PostgreSQL bağlantıları
- SQLAlchemy ORM setup
- Query optimization

### 3. Caching & Performance
- Redis ile response caching
- Rate limiting implementation
- Async/await optimizations

### 4. Security & Monitoring
- Authentication/authorization
- Input validation
- Prometheus metrics

## 🚀 Başlangıç

```bash
cd api
pip install -r requirements.txt
uvicorn main:app --reload
```

API Documentation: http://localhost:8000/docs

## 📁 Klasör Yapısı

- `routers/` - API router'ları
- `models/` - Pydantic modelleri
- `utils/` - Yardımcı fonksiyonlar
- `tests/` - API testleri

## 🤝 Diğer Takımlarla Koordinasyon

- **ML Team**: Model inference integration
- **ETL Team**: Database schema alignment
- **Frontend Team**: API contract definition 
# ETL Modülü - Veri Toplama ve İşleme

**ETL TEAM**: Bu modülü geliştirmek sizin sorumluluğunuzda! 🛠️

## 📋 Görevleriniz

### 1. Web Scraping
- `scripts/` klasöründe scraper'ları implement edin
- LinkedIn, Indeed, Kariyer.net için ayrı scriptler
- Rate limiting ve error handling ekleyin

### 2. Airflow DAG'ları
- `dags/job_scraping_dag.py` dosyasındaki TODO'ları tamamlayın
- Her 2 saatte bir çalışan pipeline
- Monitoring ve alerting ekleyin

### 3. Data Processing
- NLP ile skill extraction
- Data normalization ve cleaning
- Duplicate detection

### 4. Database Operations
- TimescaleDB schema design
- Batch insert optimizations
- Data retention policies

## 🚀 Başlangıç

```bash
cd etl
pip install -r requirements.txt
airflow webserver --port 8080
```

## 📁 Klasör Yapısı

- `dags/` - Airflow DAG'ları
- `scripts/` - Scraping scriptleri
- `config/` - Konfigürasyon dosyaları
- `tests/` - Unit testler

## 🤝 Diğer Takımlarla Koordinasyon

- **ML Team**: Skill extraction için NER modeli
- **Backend Team**: Database schema alignment
- **DevOps Team**: Airflow deployment 
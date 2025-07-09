# ML Modülü - Makine Öğrenmesi

**ML TEAM**: Maaş tahmin modelini sizin geliştirmeniz gerekiyor! 🤖

## 📋 Görevleriniz

### 1. Model Training
- `training/train.py` dosyasındaki `SalaryPredictor` sınıfını implement edin
- LightGBM ile regression model
- Feature engineering stratejisi geliştirin

### 2. NLP Pipeline
- spaCy ile skill extraction
- Custom NER model training
- Skill normalization ve mapping

### 3. Model Serving
- `inference/` klasöründe prediction API
- Model versioning ve A/B testing
- Performance monitoring

### 4. Evaluation
- Cross-validation strategies
- Business metrics (MAPE, R²)
- Model interpretability (SHAP)

## 🚀 Başlangıç

```bash
cd ml
pip install -r requirements.txt
python training/train.py --help
```

## 📁 Klasör Yapısı

- `training/` - Model eğitim scriptleri
- `inference/` - Prediction servisi
- `models/` - Eğitilmiş modeller
- `tests/` - Model testleri

## 🤝 Diğer Takımlarla Koordinasyon

- **ETL Team**: Feature engineering için data pipeline
- **Backend Team**: Model serving integration
- **Frontend Team**: Prediction result visualization 
# Infrastructure Modülü - DevOps

**DEVOPS TEAM**: Deployment ve monitoring sistemi kurun! 🔧

## 📋 Görevleriniz

### 1. Containerization
- `docker/` klasöründeki Dockerfile'ları optimize edin
- Multi-stage build implementation
- Security hardening

### 2. CI/CD Pipeline
- `github-actions/ci-cd.yml` workflow'unu tamamlayın
- Automated testing ve deployment
- Security scanning (Trivy)

### 3. Orchestration
- Docker Compose production config
- Kubernetes manifests (opsiyonel)
- Service mesh setup

### 4. Monitoring
- Prometheus metrics collection
- Grafana dashboards
- Alerting rules

## 🚀 Başlangıç

```bash
# Tüm servisleri başlat
docker-compose up -d

# Sadece core servisler
docker-compose up postgres timescaledb redis
```

## 📊 Monitoring Endpoints

- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001
- API Health: http://localhost:8000/health

## 📁 Klasör Yapısı

- `docker/` - Dockerfile'lar
- `github-actions/` - CI/CD workflows
- `monitoring/` - Prometheus/Grafana config
- `k8s/` - Kubernetes manifests (gelecek)

## 🔐 Security Checklist

- [ ] Container security scanning
- [ ] Secrets management
- [ ] Network policies
- [ ] HTTPS/TLS configuration
- [ ] Backup strategies

## 🤝 Diğer Takımlarla Koordinasyon

- **Backend Team**: Health check endpoints
- **Frontend Team**: Build optimization
- **Tüm Takımlar**: Environment variables ve secrets 
import React from "react";
import { Row, Col } from "./index";

const GridDemo = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Grid System Demo</h2>

      {/* Basic Grid */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Basic Grid</h3>
        <Row>
          <Col span={6}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-6
            </div>
          </Col>
          <Col span={6}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-6
            </div>
          </Col>
          <Col span={6}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-6
            </div>
          </Col>
          <Col span={6}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-6
            </div>
          </Col>
        </Row>
      </div>

      {/* Grid with Gutter */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Grid with Gutter</h3>
        <Row gutter={16}>
          <Col span={8}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-8
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-8
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-8
            </div>
          </Col>
        </Row>
      </div>

      {/* Responsive Grid */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Responsive Grid</h3>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              xs: 24, sm: 12, md: 8, lg: 6
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              xs: 24, sm: 12, md: 8, lg: 6
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              xs: 24, sm: 12, md: 8, lg: 6
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              xs: 24, sm: 12, md: 8, lg: 6
            </div>
          </Col>
        </Row>
      </div>

      {/* Alignment */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Alignment</h3>
        <Row
          justify="space-between"
          align="middle"
          style={{ height: "100px", background: "#f0f0f0" }}
        >
          <Col span={4}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-4
            </div>
          </Col>
          <Col span={4}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-4
            </div>
          </Col>
          <Col span={4}>
            <div
              style={{
                background: "#e0e0e0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-4
            </div>
          </Col>
        </Row>
      </div>

      {/* Offset */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Offset</h3>
        <Row>
          <Col span={8} offset={8}>
            <div
              style={{
                background: "#f0f0f0",
                padding: "20px",
                textAlign: "center",
              }}
            >
              Col-8 (offset: 8)
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GridDemo;

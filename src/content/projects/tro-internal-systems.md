---
title: Personnel, event management and invoicing systems
company: TRO
period: 2021 — Present
summary: Internal systems, used by 50 staff, that cover HR, event operations, payroll, and invoicing and reporting.
stack: [React, .NET 10, SQL Server, MongoDB]
order: 1
---

## What it is

TRO runs its operations on a set of internal systems, used by 50 staff. I work across four of them:

- **Personnel system.** An internal HR system. It holds employee information, employment status and salaries.
- **Event management system.** Where event jobs are planned and resourced. It covers staffing, the booking and scheduling of labour and vehicles, venues, warehouse inventory, CRM and purchase orders.
- **Invoicing and reporting system.** Raises invoices and produces the business's reports.
- **Payroll application.** A web app for the finance team that prepares payroll for the workforce managed in Liveforce, a third-party staffing platform.

Between them they cover HR, event operations and finance.

## What I do

- Designed and built the payroll application. It uses the Liveforce API to generate the files the external payroll processor needs (new starters, bank detail changes, and one-off and variable pay), brings in staff expenses, and posts the results to Access Dimensions. It replaces manual work that would take two to three days per payroll run.
- Integrated the payroll application with FocalPoint, part of Access Dimensions, to pull operator hours and process their pay in the same place. It has admin user management, sign-in built on .NET authentication, and a dashboard that syncs data at login or on demand.
- Delivered the event management system across the stack: React screens, .NET endpoints and the SQL Server schema behind them.
- Secured user management with Okta multi-factor authentication.
- Wrote a scheduled script that syncs form submissions from the Connecteam API into the company database for Power BI reports. It saves 10 hours of manual work a week.
- Investigate and fix production issues every day, alongside new development.
- Review code for a team of three, take part in design and architecture decisions, and present finished work in sprint demos.

## Stack

React on the front end and .NET 10 on the back end. Relational data lives in SQL Server, and application logs are written to MongoDB.
